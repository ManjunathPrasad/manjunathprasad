class House:
    def __init__(self, bedroom, doors):
        self.bedroom = bedroom
        self.doors = doors
    
    def describe(self):
        print(f'This house has {self.bedroom} bedrooms and {self.doors} doors.')
    
    def __del__(self):
        print('Destructor called, House deleted.')
        
house1 = House(3, 5)
house2 = House(4, 6)

house1.describe()
house2.describe()

del house1
del house2
