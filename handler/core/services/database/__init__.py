from . import jsondb #database system from dataforge project

from core.tools import LoadPlaceholders
from core.logging import LoggingManager
from events import EventBus

import threading
import time

logger = LoggingManager("Service.Database")

class DatabaseService:
    """
    A class representing a database service.

    Attributes:
        config (ConfigManager): The configuration object for the database service.
        databases (str[]): A dictionary containing the loaded collections.
    """

    def __init__(self, config, databases: list[str] = []):
        self.config = config
        self.thread = threading.Thread(target=self.connect)

        self.dbs = {
            #"name": collection
        }

        self.running = True

        self.databases_to_load = databases

    def start(self):
        self.thread.start()
        logger.info("Connecting to database server")

    def stop(self):
        self.running = False
        for _, db in self.dbs.items():
            db.save(indent=True)
        logger.ok("Database service stopped")

    def connect(self) -> None:
        logger.success("Database connection established")
        EventBus.signal("database.ready", self)

        self.load_databases()

        while self.running:
            for _, db in self.dbs.items():
                db.save(indent=True)
            
            for i in range(60): #stops faster
                time.sleep(1) #save every minute

    def load_databases(self) -> None:
        """
        Loads the specified databases into the service.

        Returns:
            None
        """
        loaded = 0
        failed = 0

        for db in self.databases_to_load:
            self.dbs[db] = jsondb.RuntimeDB(db, logging=False)

        logger.info(f"Loaded {loaded} databases, {failed} failed")

    def get_database(self, name: str):
        """
        Retrieves a database from the service.
        
        Args:
            name (str): The name of the database to retrieve.
        
        Returns:
            Database object if found, None otherwise.
        """

        if name in self.dbs:
            return self.dbs[name]

        return None