def Xor(x, y):
    if x == 1 and y == 0 or x == 0 and y == 1:
        return 0
    else:
        return 1


a, b = bool(input()), bool(input())
print(Xor(a, b))