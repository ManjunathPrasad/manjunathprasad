# lambda function

square = lambda x:x ** 2
print(square(5))

# Lambda with multiple arguments

add = lambda a, b: a + b
print(add(5, 4))

#lambda inside map()
numbers = [1,2,3,4,5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)

# lambda inside filter()
numbers = [1,2,3,4,5]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)

#lambda inside sorted()
names = ["Alice", "Bob", "Charlie", "David", "Eve"]
sorted_names = sorted(names, key=lambda x: len(x))
print(sorted_names)

