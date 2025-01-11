for i in range(12):
    if(i==10):
        break
    print("5 x ", i+1, "=", 5 * (i+1))


print("Loop is over")


for i in range(12):
    if(i==10):
        print("Skip the iteration")
        continue
    print("5 x ", i+1, "=", 5 * (i+1))


