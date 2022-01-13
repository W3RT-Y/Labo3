#Guss the number
import random

N = 100
counter = 0

def draw_lots(n):
    r = int(n*random.random()) + 1
    return r
    
a = 1
b = N

x = draw_lots(N)  # computer draws a random numbenr 
print("C: I thought a number. Guess it!\n")

guess = 0

while (guess != x):
    guess = int(input("C: put a number from " +  str(a) + " to " + str(b) +": " ))
    counter += 1
    if(guess < x):
        print("C: too small")
        a = guess
    elif(guess > x):
        print ("C: two big")
        b = guess
    else:
        print ("C: you guessed my number. It was " + str(x))

print("\nC: you needed " + str(counter) + " moves.")