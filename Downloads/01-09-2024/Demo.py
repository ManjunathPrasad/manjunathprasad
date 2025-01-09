a = 10

if a%2 == 0:
    print("Even")
else:
    print("Odd")

print("Even" if a%2 == 0 else "Odd")    


# Zen of Python 

# Beautiful is better than ugly.
# Code should be aesthetiocally pleasing and easy to read

#Good
def calculate_area(radius):
    return 3.14*radius*radius

#Bad
def c(r): return 3.14*r*r

#Explicit is better than implicit

# Good
def add_numbers(a: int, b: int, c: int) -> int:
    return a+b+c

# Bad
def add(a, b, c):
    return a+b+c

# Simple is better than complex

# Good
numbers = [1, 2, 3, 4, 5] #List of numbers
squared = [number**2 for number in numbers]

# Bad
numbers = [1, 2, 3, 4, 5]
squared = []
for number in numbers:
    squared.append(number**2) 
    
# Complex is better than complicated

# Complex (Better)

def factorial(n):
    if n == 0:
        return 1
    else:
        return n*factorial(n-1)
    
# Complicated (Bad)

def factorial(n):
    fact = 1
    for i in range(1, n+1):
        fact *= i
    return fact

# Flat is better than nested

# if condition:
#     if another_condition:
#         result = "Valid"
        
# if condition:
#     if condition:
#         if condition:
#             if condition:
#                 result = "valid"

# Readability counts
# Good
def find_even_numbers(numbers):
    return [x for x in numbers if x%2 == 0]

#Bad 
def f(lst):
    return [x for x in lst if x%2 == 0]

# Special cases aren't special enough to break the rules

# Good
def divide(a: int ,b: int): 
    if b == 0:
        return "Cannot divide by zero"
    return a / b

# Bad 
def divide(a,b):
    if b == 0:
        return 0
    else:
        return a/b
    
# Errors should never pass silently 

# Good
try:
    result = 10/0
except ZeroDivisionError as e:
    print("Error: ", e)
    
# Bad
try:
    result = 10/0
except:
    pass

# Unless explicitly silenced
# Good 

try:
    result = 10/0
except ZeroDivisionError as e:
    pass

# In the face of ambiguity, refuse the temptation to guess

# Good

def process(value):
    if not isinstance(value, int):
        raise TypeError("Expected an Integer")
    return value * 10

# Bad
def process(value):
    return value * 10 # Assume value is always an integer

# There should be one-- and preferably only one --obvious way to do it

# Good
x = [1, 2, 3]
x.append(4)

# Bad
x = [1, 2, 3]
x[len(x):] = [4]

# Although that way may not be obvious at first unless you're Dutch

# Now is better than never

# Although never is often better than *right* now

# If the implementation is hard to explain, it's a bad idea

# Bad 

def f(lst):
    return reduce(lambda x, y: x+y, map(lambda x: x**2, filter(lambda x: x%2 == 0, lst)))

# Good
def find_even_squares(numbers):
    even_numbers = filter(lambda x: x%2 == 0, numbers)
    squares = map(lambda x: x**2, even_numbers)
    return reduce(lambda x, y: x+y, squares)   

# Although practicality beats purity

# Good
import re
text = "My digits are 508-863-1590"
phone = re.search(r'\d{3}-\d{3}-\d{4}', text)
print(phone.group())

# Bad
# Manually parsing the string to find the phone number

# sparse is better than dense

# Good
a = 1
b = 2
c = 3

# Bad
a, b, c = 1, 2, 3