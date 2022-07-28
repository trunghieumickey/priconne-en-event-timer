from os import listdir, system, getcwd
from os.path import isfile, join
cwd = getcwd() + "\\image"
cwd = [f for f in listdir(cwd) if isfile(join(cwd, f))]
for i in cwd:
    if (i.split('.')[1]) == "webp":
        continue
    system("cwebp image\\" + i + " -o image\\" + i.split('.')[0] + ".webp -resize 900 500")
    system("del image\\" + i)