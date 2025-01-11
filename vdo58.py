#-----------Without constructor-------------------

# class Person:
#     name = "Avani"
#     occ = "Developer"

#     def info(self):
#         print(f"{self.name} is a {self.occ}")


# a = Person()
# # print(a.name)
# a.name = "Divya"
# a.occ = "HR"
# a.info()


#-----------------WITH CONSTRUCTOR -------------------------

class Person:
    def __init__(self,n,o):
        print("Hey I am a person")
        self.name = n
        self.occ = o


    def info(self):
        print(f"{self.name} is a {self.occ}")

a = Person("Harry", "Developer")
b = Person("Divya", "HR")
# c = Person(1,2,3)
a.info()
b.info()
# a.name = "Divya"
# a.occ = "HR"
# a.info()





