import math
a = int(input())
b = int(input())
for x in range(a, b):
    if math.sqrt(x * 1.0) == int(math.sqrt(x)):
        print(x, end=" ")
