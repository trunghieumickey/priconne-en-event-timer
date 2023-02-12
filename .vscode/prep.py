from os import getcwd,popen
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

newl = popen("curl https://got.cr/priconne-update").read().split("anime-news/20")[-1].split('"')[0]

for i in data:
    if (i["icon_src"]!="iblock" and i["link"] == ""):
        i["link"] = newl

with open(cwf, "w") as f:
    json.dump(data, f, indent=4)
