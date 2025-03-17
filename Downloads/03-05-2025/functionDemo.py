#Function

#def Keyword 

#Defining a Function
def greet():      
    print("Hello")

greet() # Function Call


#Function with parameters

def greet(name):
    print(f"Hello, {name}")

greet("Alice")

#Function with a return value 

def add(a, b) -> int:
    result = a + b # result v ar here is a different variable declared in local scope
    return result 
# --------------------------------------------
result = add(5.5, 4) # result varibale is another different var, which is with the scope outside the function defintion
print(result)


#Default Parameter Values 

def greet(name="Guest"):
    print(f"Hello, {name}")

greet()
greet("Bob")

#Arbitrary Arguments

def add_numbers(*numbers):
    return sum(numbers)

print(add_numbers(1, 2, 3, 4, 5))

# Keyword Arguments (**kwargs)

def print_info(**info):
    for key, value in info.items() :
        print(f"{key}:{value}")
    
print_info(name="Alice", age=25, city="NYC")

# Lambda Function -> short, inline function

square = lambda x: x ** 2
print(square(5))

# recursive function
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

def add(a:int, b:int) -> int:
    result = int(a) + int(b)# Explicit conversion
    return result 
# --------------------------------------------
result = add(5.5, 4.5) # Able to get the integer result
print(result)