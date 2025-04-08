# first class function

# Assigned to a variable
# Passed as an argument to other functions
# Returned by another function

# First 
# def greet(name):
#     return f"Hello {name}"

# greet_someone = greet
# print(greet_someone("John"))


# Third 
# 
def outer_function(msg):
    def inner_function():
        return f"Message = {msg}"
    return inner_function

message_func =  outer_function("Python is awesome")
print(message_func())