class Animal:
    def __init__(self, name):
        self.name = name

    def _protected_method(self):
        return f"{self.name} is a protected method."

    def __private_method(self):
        return f"{self.name} is a private method."

    def access_private_method(self):
        return self.__private_method()
    
class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)
        
    def access_protected_method(self):
        return self._protected_method()
    
# Creating an object of the Dog class
dog = Dog("Buddy")
# Accessing protected method
print(dog.access_protected_method())  # Output: Buddy is a protected method.
# Accessing private method using public method
print(dog.access_private_method())  # Output: Buddy is a private method.    
# Accessing private method using name mangling
print(dog._Animal__private_method())  # Output: Buddy is a private method.  
# Accessing private method using name mangling
print(dog.__private_method())  # Uncommenting this line will raise an AttributeError  



'''
Nothing - public methods and properties 

_(underscore) - protected methods and properties 
-> accessed by parent and child classes

__(double underscore) - private methods and properties'
-> Accessed only by the own class itself 

'''  