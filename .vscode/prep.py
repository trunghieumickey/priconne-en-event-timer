from os import getcwd
import time
import json
cwf = getcwd() + "\\data\\data.json"
with open(cwf, "r") as f:
    data = json.load(f)


while True:
    retrim = False
    for i in data:
        if(time.strptime(i["end_time"], "%Y/%m/%d %H:%M:%S")<time.gmtime() and i["icon_src"]!="iblock"):
            print(i["event_name"],"is removed")
            data.remove(i)
            retrim = True
    if(not retrim):
        break

for i in range(len(data)):
    if data[i]["icon_src"]=="iblock":
        max = data[i]["end_time"]
        for j in range(i+1,len(data)):
            if data[j]["icon_src"]=="iblock":
                break
            if time.strptime(data[j]["end_time"], "%Y/%m/%d %H:%M:%S") > time.strptime(max, "%Y/%m/%d %H:%M:%S"):
                max = data[j]["end_time"]
        data[i]["end_time"] = max

with open(cwf, "w") as f:
    json.dump(data, f, indent=4)
