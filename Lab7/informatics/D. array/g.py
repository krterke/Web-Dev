n = int(input())
a = list(map(int, input().split()))
k = 0
for i in range(0, int(n/2)):
    k = a[i]
    a[i] = a[n-1-i]
    a[n-1-i] = k
print(a, end=" ")
