from math import floor, log

powers_of_two = [2**n for n in range(floor(log(20, 2)) + 1)]
print(f'Powers of 2: {powers_of_two}')