n = int(input())
a = list(map(int, input().split()))
sum = 0
for i in range(1, n):
    if a[i] > a[i-1]:
        sum += 1
print(sum)
