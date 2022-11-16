import os

currentPath = os.getcwd()

for file in os.listdir(currentPath):
    if file.endswith(".git"):
        print("Git exists")
    else:
        os.system("git init")
        print("Enter your repo link: ")
	repoLink = input()
        print("Givenlink: "+ repoLink)
