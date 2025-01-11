#---------------------MAP-----------------

# def cube(x):
#     return x*x*x

# print(cube(2))

# l = [1,2,4,6,3]
# newl = []
# for item in l:
#     newl.append(cube(item))


# newl = list(map(cube, l))
# newl = list(map(lambda x: x*x*x, l))
# print(newl)





# ---------------------------FILTER---------------------

# def filter_function(a):
#     return a>2

# newnewl = list(filter(filter_function, l))
# print(newnewl)



#--------------------------REDUCE----------------------------
from functools import reduce

#List of numbers
numbers = [1,2,3,4,5]

#Calculate the sum of the numbers using the reduce function
sum = reduce(lambda x,y: x+y, numbers)

#Print the sum
print(sum)






