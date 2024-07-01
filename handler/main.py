from colorama import Fore
import threading

if __name__ != "__main__":
    raise ImportError("This application cannot be imported as a module, run it directly instead.")

def banner():
    text = """
oooo   oooo                       o8   o88                        
 8888o  88   ooooooo oooo  oooo o888oo oooo   ooooooo   ooooooo   
 88 888o88   ooooo888 888   888  888    888 888     888 ooooo888  
 88   8888 888    888 888   888  888    888 888       888    888  
o88o    88  88ooo88 8o 888o88 8o  888o o888o  88ooo888 88ooo88 8o 
       
           A High-Performance and Modular API Server
           
"""
    for ln in text.splitlines():
        print(Fore.BLUE + ln + Fore.RESET)

banner()

import core
import events

def run_http():
    from servers.http import Server
    Server.start()

def run_socket():
    from servers.socket import Server
    Server.start()


def main():
    threading.Thread(target=run_http).start()
    # threading.Thread(target=run_socket).start()

main()