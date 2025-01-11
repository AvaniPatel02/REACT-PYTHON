# tup = (1,5,8,34,67,12,"hello",True,38,90)
# print(type(tup), tup)
# print(len(tup))
# print(tup[0])
# print(tup[-2])


# x=(1)
# print(type(x))

# x=(1,)
# print(type(x))

# # tup[0] = 3
# # print(tup)

# if 34 in tup:
#     print("Yes 34 is present in this tuple")


# tup2 = tup[1:4]
# print(tup2)

# countries = ("India", "Iraq", "Paris","Nepal","USA")
# countries2 = ("Turkey","Korea","Canada")
# y = countries + countries2
# print(y)



tuple1 = (0,1,2,3,2,3,1,3,2,3)
# res = tuple1.count(3)
# res = tuple1.index(3)
res = tuple1.index(3,4,8)
# print(tuple1)
print(res)
# print("Count of 3 in tuple is: ", res)