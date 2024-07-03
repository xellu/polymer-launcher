#dataforge db system (tritium edit)
import os, json

from . import engine
from ....templates import DatabaseSchemes

Item = engine.item
instances = []

#DB
class RuntimeDB:
    def __init__(self, name, folder="data",  logging = True, debug = False, runtime=False):
        self.name = name
        self.folder = folder
        self.path = os.path.join(self.folder, self.name + ".xeldb")
        self.content = []
        self.logging = logging
        self.debug = debug
        self.runtime = runtime
        
        if not os.path.exists(self.folder):
            os.makedirs(self.folder, exist_ok=True)

        if os.path.exists(self.path) == False and runtime == False:
            if DatabaseSchemes.Schemes.get(self.name): #load db from scheme/template
                self.content = DatabaseSchemes.Schemes.get(self.name)
                self.save()
            else:
                open(self.path, "x").write("[]")
        
        self.load()
        instances.append(self)
    
    #LOADING AND SAVING DATA
    def save(self, indent:bool = False):
        _save = []
        for x in self.content:
            _save.append( vars(x) )
        
        open(self.path, "w", encoding="utf-8").write(
            json.dumps( _save, indent=2 ) if indent else json.dumps( _save )
        )
    
    def load(self):
        if self.runtime: return
        
        dataset = json.loads( open( self.path, "r", encoding="utf-8" ).read() )
        for data in dataset:
            i = Item()
            for x in data:
                setattr(i, x, data[x])
            
            self.content.append( i )
            
    def wipe(self):
        os.remove(self.path)
    
    #SEARCHING    
    def find(self, key, query):
        for item in self.content:
            if vars(item).get(key) == query:
                return item
            
        
    def findall(self, key, query):
        output = []
        for item in self.content:
            if vars(item).get(key) == query:
                output.append( item )
        
        return output
    
    #MANAGEMENT
    def delete(self, item: Item):
        self.content.remove( item )
    
    def remove(self, item: Item):
        self.delete(item)
        
    def add(self, item: Item):
        self.content.append( item )
        return item
    
    def create(self, item: Item):
        self.add(item)
        return item
        
    def clone(self, item: Item):
        item.DATAFORGE_UUID = engine._id()
        self.add(item)
        return item

def get_instance(name):
    for x in instances:
        if x.name == name:
            return x
