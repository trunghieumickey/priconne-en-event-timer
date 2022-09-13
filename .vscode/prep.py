from os import getcwd
import time
import json
cwf = getcwd() + "\\static\\data.json"
with open(cwf, "r") as f:
    data = json.load(f)

while True:
    retrim = False
    for i in data:
        if(i["icon_src"]!="iblock" and time.strptime(i["end_time"], "%Y/%m/%d %H:%M:%S")<time.gmtime()):
            print(i["event_name"],"is removed")
            data.remove(i)
            retrim = True
    if(not retrim):
        break

for i in data:
    if(i["icon_src"]!="iblock"):
        i["link"] = i["link"].split("https://www.crunchyroll.com/anime-news/20")[-1]

with open(cwf, "w") as f:
    json.dump(data, f, indent=4)
