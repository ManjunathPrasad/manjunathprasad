# Inheritance 

# Inheritance Definition
''' 
Inheritance is a mechanism in 
object-oriented programming 
that allows a new class 
to inherit properties and methods 
from an existing class.
'''
# This promotes code reusability and establishes a hierarchical relationship between classes.
# Inheritance Syntax
# Single Inheritance
# Multi-level Inheritance
# Multiple Inheritance
# Hybrid Inheritance 
# Hierarchical Inheritance
class ParentClass:
    def __init__(self):
        self.parent_attribute = "I am a parent attribute"
        
    def parent_method(self):
        print("This is a method from the parent class")
        
class ChildClass(ParentClass):
    def __init__(self):
        super().__init__()  # Call the constructor of the parent class
        self.child_attribute = "I am a child attribute"
        
    def child_method(self):
        print("This is a method from the child class")
        
class GrandChildClass(ChildClass):
    def __init__(self):
        super().__init__()  # Call the constructor of the child class
        self.grandchild_attribute = "I am a grandchild attribute"
        
    def grandchild_method(self):
        print("This is a method from the grandchild class")

child1 = ChildClass()
child1.parent_method()  # This will call the method from the parent class
grandchild = GrandChildClass()
grandchild.parent_method()  # This will also call the method from the parent class
grandchild.child_method()
