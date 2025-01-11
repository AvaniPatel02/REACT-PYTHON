class Person:
    name = "Avani"
    occupation = "Software Developer"
    networth = 10
    def info(self):  # self matlab vo object jiske liye method call kiya ja raha hai
        print(f"{self.name} is a {self.occupation}")

a = Person()
b = Person()
c = Person()


a.name ="AVANI"
a.occupation = "Developer"
# print(a.name, a.occupation)

b.name = "Shubham"
b.occupation = "HR"

a.info()
b.info()
c.info()





