class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print("Animal speaks")
        
class Dog(Animal):
    def __init__(self,name, breed):
        super().__init__(name)
        self.breed = breed
        
    def speak(self):
        super().speak()
        print("Woof! Woof!")
        
class Cat(Animal):
    def __init__(self,name, color):
        super().__init__(name)
        self.color = color
        
    def speak(self):
        print("Meow! Meow!")
        
        
# Example usage
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Black")

dog.speak()  # Output: Woof! Woof!
cat.speak()  # Output: Meow! Meow!