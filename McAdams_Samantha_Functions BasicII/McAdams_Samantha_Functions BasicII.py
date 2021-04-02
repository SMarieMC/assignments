def countdown(num):
    nums_list = []
    for val in range(num,-1,-1):
        nums_list.append(val)
    return nums_list

print(countdown(12))
print(countdown(5))


def print_and_return(nums_list):
    print(nums_list[0])
    return nums_list[1]

# print(print_and_return([10,12]))


def first_plus_length(nums_list):
    return nums_list[0] + len(nums_list)

# print(first_plus_length([13,2,3,4,5]))


def values_greater_than_second(orig_list):
    new_list = []
    # get the second value in the original list
    second_val = orig_list[1]
    # scan through the original list, find values greater than second value and add them to the new list
    for idx in range(len(orig_list)):
        if orig_list[idx] > second_val:
            new_list.append(orig_list[idx])
    
    print(len(new_list))
    return new_list

print(values_greater_than_second([5,2,3,2,1,4]))


def length_and_value(size, value):
    new_list = []
    for num_times in range(size):
        new_list.append(value)
    return new_list

print(length_and_value(4,7))