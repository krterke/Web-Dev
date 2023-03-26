n = int(input())
a = list(map(int, input().split()))
sum = 0
for i in range(1, n):
    if (a[i] > 0 and a[i-1] > 0) or (a[i] < 0 and a[i-1] < 0):
        sum += 1
if sum > 0:
    print('YES')
else:
    print('NO')
