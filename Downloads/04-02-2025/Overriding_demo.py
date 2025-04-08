class Animal:
    def sound(self):
        print("Animal makes a sound")
        
class Dog(Animal):
    def sound(self):
        print("Dog barks")
        
class Cat(Animal):
    def sound(self):
        print("Cat meows")
        
animal = Animal()
bob = Dog()
tom = Cat()

animal.sound()  # Output: Animal makes a sound
bob.sound()     # Output: Dog barks

