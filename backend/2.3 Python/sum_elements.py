def sum_elements(elements: list) -> int:
    options = ['sum from element with value of 5', 'sum from element on position 5']
    for index, option in enumerate(options):
        print(f'{index} - {option}')
    decision = int(input('What do you mean? Enter corresponding number: '))
    return sum(elements[1:11]) if decision == 0 else sum(elements[4:14])


if __name__ == '__main__':
    numbers = [1, 5, 2, 3, 1, 4, 1, 23, 12, 2, 3, 1, 2, 31, 23, 1, 2, 3, 1, 23, 1, 2, 3, 123]
    print(f'Sum of first ten elements starting from element 5: {sum_elements(numbers)}')
