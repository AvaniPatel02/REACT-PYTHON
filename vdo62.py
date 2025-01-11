# ----------------------PUBLIC ACCESSMODIFIERS--------------------

# class Employee:
#     def __init__(self):
#         self.name = "Harry"

# a = Employee()
# print(a.name) 

# ------------------------PRIVATE ACCESSMODIFIERS-------------------

# class Employee:
#     def __init__(self):
#         self.__name = "Harry"

# a = Employee()
# # print(a.name) # Cannot be accessed directly 
# print(a._Employee__name)  #Can be accessed indirectly
# print(a.__dir__())





# ------------------------PROTECTED ACCESSMODIFIERS-------------------

class Student:
    def __init__(self):
        self._name = "Avani"
    
    def _funName(self):       #Protected method
        return "CodeWithHarry"

class Subject(Student):       #inherited class
    pass


obj = Student()
obj1 = Subject()
print(dir(obj))

#calling by object of student class
print(obj._name)
print(obj._funName())

#calling by object of subject class
print(obj1._name)
print(obj1._funName())