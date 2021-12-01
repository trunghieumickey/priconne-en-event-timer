from os import listdir, system, getcwd
from os.path import isfile, join
cwd = getcwd() + "\\icons"
cwd = [f for f in listdir(cwd) if isfile(join(cwd, f))]
for i in cwd:
    if (i.split('.')[1]) == "webp":
        continue
    system("cwebp icons\\" + i + " -lossless -o icons\\" + i.split('.')[0] + ".webp -resize 900 506")
    system("del icons\\" + i)