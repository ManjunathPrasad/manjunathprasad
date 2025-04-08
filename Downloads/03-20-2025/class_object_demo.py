class Car:
    def __init__(self, brand, model): # constructor = Initialize the objects
        self.brand = brand
        self.model = model
    
    def display(self):
        print(f"Brand: {self.brand}, Model: {self.model}")
        
    def move(self):
        print(f"{self.brand} is moving")

car1 = Car("Toyota", "Camry") # object creation
car1.display() # method calling
car1.move() # method calling