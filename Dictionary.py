# dic = {
#     "Harry" : "Human being",
#     "Spoon": "Object"
# }

# # print(dic)
# print(dic["Harry"])


# abc = {
#     344: "Avani",
#     56:"Shubham",
#     678:"Zakir",
#     567:"Neha"
# }

# print(abc[567])
# print(abc)
# print(abc.keys())

# for key in abc.keys():
#     print(abc[key])


info = {"name":"Karan" , "age":19, "eligible":True}
# print(info)
# # print(info['name'])
# # print(info.get('eligible'))

# print(info.keys())
# print(info.values())

# for key in info.keys():
#     # print(info[key])
#     print(f"The value correspond to the key {key} is {info[key]}")

print(info.items())

# for key, value in info.items():
#     print(f"The value correspond to the key {key} is {value}")



# -----------------------dictionary methods------------------

ep1 = {122: 45, 123:89 , 567:69, 670:69}

ep2= {222:67, 566:90}

# ep1.update(ep2)
ep1.pop(122)
print(ep1)

# empt ={}
# print(empt)

ep1.popitem()
print(ep1)