# x = 4
# print(x)

# def hello():
#     x=5
#     y=1
#     print(f"The local x is {x}")
#     print("Hello Harry")

# print(f"The global x is {x}")
# hello()
# x=5
# print(f"The global x is {x}")
# print(y) # this will cause an error because y is a local variable and is not accessible outside of the function




x = 10 # global variable

def my_function():
    global x
    x = 4
    y = 5 # local variable
    print(y)

my_function()
print(x)
# print(y)