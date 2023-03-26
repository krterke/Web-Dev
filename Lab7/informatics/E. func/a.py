def min(a, b, c, d):
    arr = [a, b, c, d]
    arr.sort()
    return arr[0]

a, b, c, d = int(input()), int(input()), int(input()), int(input())
print(min(a, b, c, d))