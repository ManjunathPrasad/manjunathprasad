'''
An exception is an event that occurs during the execution of a program 
that disrupts the normal flow of instructions.
'''
'''
# syntax
'''
# try:
#     # code that may raise an exception
# except ExceptionType:
#     # code to handle the exception  
# else:
#     # code to run if no exception occurs
# finally:
#     # code that will always run, regardless of exceptions

# def exception_demo():
#     try:
#         x = int(input("Enter a number: "))
#         y = 10 / x
#         print(f"Result: {y}")
        
#     except ZeroDivisionError:
#         print("Error: Division by zero is not allowed.")

#     else:
#         print("No exceptions occurred.")    
    
#     finally:
#         print("Execution completed.")  
        
# exception_demo()



'''
# list of exception names

ZeroDivisionError - Raised when dividing by zero.
IndexError - Raised when trying to access an index that is out of range.
ValueError - Raised when a function receives an argument of the right type but inappropriate value.
TypeError - Raised when an operation or function is applied to an object of inappropriate type.
KeyError - Raised when a dictionary key is not found.
AttributeError - Raised when an invalid attribute reference is made.
ImportError - Raised when an import statement fails to find the module definition.
NameError - Raised when a local or global name is not found.
FileNotFoundError - Raised when a file or directory is requested but cannot be found.

'''

def check_prime():
    try:
        num = int(input("Enter a number: "))
        if num < 2:
            raise ValueError("Number must be greater than 1.")
        
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                raise ValueError(f"{num} is not a prime number.")
        
        print(f"{num} is a prime number.")
    
    except ValueError as ve:
        print(f"ValueError: {ve}")
    
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    
    finally:
        print("Execution completed.")
        
check_prime()