# def calculateGmean(a,b):
#     mean = (a*b)/(a+b)
#     print(mean)

# def isGreater(a,b):
#     if(a>b):
#         print("First number is greater")
#     else:
#         print("Second number is greater or equal")

# def isLessar(a,b):
#     pass 



# a=9
# b=8
# if(a>b):
#     print("First number is greater")
# else:
#     print("Second number is greater or equal")
# gmean1=(a*b)/(a+b)
# print(gmean1)
# calculateGmean(a,b)
# c=5
# d=6
# if(c>d):
#     print("First number is greater")
# else:
#     print("Second number is greater or equal")
# gmean2=(c*d)/(c+d)
# print(gmean2)
# calculateGmean(c,d)


 #----------------------------vdo no. 21----------------------------------



#------------Required arguments
# def average(a,b):
#     print("The average is " , (a+b/2))
 
# average(4,6)


#------------default arguments
# def average(a=9,b=1):
#     print("The average is " , (a+b/2))
 
# average(1,5)
# average(b=5)
# average(a=2)

#------------Keyword arguments
# def average(a9, b=1):
#     print("The average is: ", (a+b)/2)
# average(b=9, a=21)

#-------------Variable length arguments
# def average(*numbers):
#     # print(type(numbers))
#     sum=0
#     for i in numbers:
#         sum = sum + i
#     print("Average is: ", sum / len(numbers))

 # average(5,6,3,8)

# def name(**name):
#     print("Hello,", name["fname"], name["mname"],name["lname"])

# name(mname= "VINITBHAI", lname="PATEL", fname="AVANI")




#----------------------Recursion-------------------


# factorial(n) = n * factorial(n-1)
# def factorial(n):
#     if(n==0 or n==1):
#         return 1
#     else: 
#         return n * factorial(n-1)

# print(factorial(5))

# #----------------Fibonacci sequence---------------------

# nterms = int(input("How many terms? "))


# n1, n2 = 0, 1
# count = 0


# if nterms <= 0:
#    print("Please enter a positive integer")

# elif nterms == 1:
#    print("Fibonacci sequence upto",nterms,":")
#    print(n1)
# else:
#    print("Fibonacci sequence:")
#    while count < nterms:
#        print(n1)
#        nth = n1 + n2
#        n1 = n2
#        n2 = nth
#        count += 1


def welcome():
    print("Hey you are welcome my friend.")


harry = "A good girl"