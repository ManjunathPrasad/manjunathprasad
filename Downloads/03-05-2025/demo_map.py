# map() function 
#  map syntax is map(function, iterable)

"""
map() function applies a given function 
to each item in an iterable (list, tuples, 
dictionary etc) and returns 
a list of the results.



"""
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)

# map() with pow() function
numbers = [1, 2, 3, 4, 5]
exponent = [2, 3, 4, 5, 6]  
powered = list(map(pow, numbers, exponent))
print(powered)

#map function custom function
a = [1, 2, 3]
b = [4, 5, 6]
sum_result = list(map(lambda x, y: x + y, a, b))
print(sum_result)

names = ["Alice", "Bob", "Charlie"]
upper_case = list(map(str.lower, names))
print(upper_case)