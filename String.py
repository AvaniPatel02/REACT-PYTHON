# STRINGS ARE IMMUTEABLE




# name = "Avani"
# friend = "Priyanshi"
# anotherFriend = "Aditi"
# apple = '''He said, 
# Hi Avani
# Hey I am Good
# "I want to eat an apple'''

# print("Hello, " + name)
# print(apple)

# print(name[0])
# print(name[1])
# # print(name[5]) #Throws an error

# print("Lets use a for loop\n")
# for character in apple:
#     print(character)








#String Slicing

# name = "Avani Patel"
# print(len(name))
# print(name[0:5])
# print(name[1:4])
# print(name[:5])
# print(name[0:-3])
# print(name[:len(name)-3])
# print(name[-1:-3])
# print(name[-3:-1])
# print(name[-1:-3])

# nm = "Harry"
# print(nm[-4:-2])



#string methods


# a = "!!!!!!!!!!!!!!!AVANI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
# print(len(a))
# print(a.upper())
# print(a.lower())
# print(a.rstrip("!"))
# print(a.replace("Avani", "Patel"))
# print(a.split(" "))
# blogHeading = "introduction to js"
# print(blogHeading.capitalize())

# str1 = "welcome to the console !!!!"
# print(len(str1))
# print(str1.center(50))
# print(a.count("Avani"))

# print(str1.endswith("!!!"))
# print(str1.endswith("to", 4,10))

# str1 = "He's name is Dan. He is an honest man."
# print(str1.find("is"))
# print(str1.index("is"))

# str1 = "WelcomeToTheConsole"
# print(str1.isalnum())
# str1 = "Welcome"
# print(str1.isalpha())

# str1 = "hello world"
# print(str1.islower())

# str1 = "We wish you a Merry Christmas\n"
# print(str1.isprintable())

# str1 = "         " #using spacebar
# print(str1.isspace())
# str2 = "            " #using tab
# print(str2.isspace())
 
# str1 = "World Health Organization"
# print(str1.istitle())

# str2 = "To kill a Mocking bird"
# print(str2.istitle())

# str1 = "Python is a Interpreted Language"
# print(str1.startswith("Python"))

# str1 = "Python is a Interpreted Language"
# print(str1.swapcase())

# str1 = "He's name is Dan. He is an honest man."
# print(str1.title())

# applePrice = 210
# budget = 200
# if(applePrice <= budget):
#     print("Alexa, add 1 kg Apples to the cart.")
# elif(budget - applePrice > 70):
#     print("Its okay you can buy")
# else:
#     print("Alexa, do not add Apples to the cart.")


#----------------STRING FORMATTING ------------------

# without fstring
# letter = "Hey my name is {} and I am from {}"
# country="India"
# name="Harry"

# print(letter.format(name,country))

# #with using fstring

# print(f"Hey my name is {name} and I am from {country}")

# print(f"We use f-string like this: Hey my name is {{name}} and I am from {{country}}")

# price = 42.343744634
# txt = f"For only {price:.2f} dollars!"
# print(txt)  
# print(txt.format())
# print((f"{2 * 30}"))
# print(type(f"{2 * 30}"))






#----------------------------DOCSTRING

def square(n):
    '''Takes in a number n, returns the square of n '''
    print(n**2)
square(5)
print(square.__doc__)