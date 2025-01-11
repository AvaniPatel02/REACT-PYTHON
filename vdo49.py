# READING FILE

# f = open("myfile.txt", 'rb')
# # print(f)

# text = f.read()
# print(text)
# f.close()


# WRITING A FILE

f = open("myfile2.txt", "a")
f.write("Hello, world!")
f.close()


with open('myfile2.txt', 'a') as f:
    f.write("Hey i am inside with")