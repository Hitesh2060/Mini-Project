import random
a= random.randint(0,100)

check=True
count=0
while(check!=False):
    user = int(input("Enter any number upto 0 to 100\n"))
    if(user<a):
        print("Choose greater number")
    elif(user>a):
        print("Choose lesser number")
    else:
        print("You find the number")  
        check=False 
    count=count+1
    
print(f"You complete in {count} step")
# if(check==False):
#     print("You found the number")


