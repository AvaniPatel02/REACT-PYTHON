marks = [34,67,98,87,56,90,83,91]

# index = 0
# for mark in marks:
#     print(mark)
#     if(index == 3):
#         print("Harry awesome!")
#     index += 1


# for index, mark in enumerate(marks, start=1):
#     print(mark)
#     if(index == 3):
#         print("Harry awesome!")


fruits = ['apple', 'banana', 'mango']
for index , fruit in enumerate(fruits):
    print(index,fruit) 


fruits = ['apple', 'banana', 'mango']
for index , fruit in enumerate(fruits, start=1):
    print(index,fruit)   