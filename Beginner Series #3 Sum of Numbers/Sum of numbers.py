def get_sum(a, b):
    sum_number = 0
    if a == b:
        return a
    else:
        while (a < b):
            sum_number += a
            a += 1
        while (a > b):
            sum_number += a
            a -= 1
    sum_number += b
    return sum_number


print("This is new function!")

print(get_sum(1, -5))
