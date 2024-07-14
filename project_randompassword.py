import random
alphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
number=[0,1,2,3,4,5,6,7,8,9]
symbol=["!","@","#","$","&","*"]
nabin=""
password= []
for i in range(2):
    a= random.choice(alphabet)
    b= random.choice(number)
    c= random.choice(symbol)
    password.append(a)
    password.append(b)
    password.append(c)
print(password)
  
for x in password: 
    hitesh=str(x)
    nabin=nabin+hitesh
print(f"your randomly genrated password is {nabin}")