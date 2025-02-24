# # Data Structures 

# # List, Dictionary, Tuples, Sets and Strings

# # lists - ordered, unordered collection - mutable (modify)

empty_list = []

numbers = [1, 2, 3, 4, 5]

mixed_list = [10, 20, 'hello', 3.14, True]

nest_list = [[1, 2, 3], [4, 5, 6]]

mixed_nested_list = [['Hi', 3.14, False], [20, -100, True]]

# # List Functions and Methods

# # 1. Adding Elements - Append, Insert, Extend
lst = [1, 2, 3]

lst.append(4) # lst = [1, 2, 3, 4] 

lst.insert(1, 10) #lst = [1, 10, 2, 3, 4]

lst.extend([5, 6]) # lst = [1 ,10, 2, 3, 4, 5, 6]

lst.reverse() 

lst.sort()

# # Removing ELements

lst.remove(10) 

lst.pop(5)

lst.clear()

print(lst)

# # 3. Accessing Elements

# indexing - list[index] 

# Slicing - list[start:end:step]

list = [10, 20, 30, 40, 50]

print(list[1])
print(list[-5])
print(list[1:4])
print(list[::-1])
print(list[:2])
print(list[2:4])

#4. Searching elements 
#index(item)
#count(item)

list = [10, 20, 30, 40, 50]

print(list.index(20))
print(list.count(20))

#5. Sort and reverse

#6. copying list 

lst = [1, 2, 3]
copy_lst = lst.copy()
print(copy_lst)

# length, sum, max, min

print(len(lst))
print(sum(lst))
print(min(lst))
print(max(lst))


# # Dictionary 

# 1. Create Dictionary 

empty_dict = {}

student = {
    "name":"John",
    "Age": 25,
    "courses" : ["Math", "CS"],
    "grade" : 9.0
}

person = dict(name = "alice", age=30, country="USA")

print(student)

print(person)

#Accessing Dictionary Elements

print(student["name"])

print(student.get("Age"))


# # 3. Adding and updating key-value pairs

student["city"] = "New York"

student["Age"] = 20

print(student) 

# Removing Elements

# student.pop("grade")

# print(student)

# student.popitem()

# print(student)

# # Dictionary Methods 

print(student.keys())
print(student.values())
print(student.items())

new_dict = {"Gender": "Male"}

student.update({"grade": "A", "Age":18})
print(student)

# new_student = student.copy()
# print(new_student)


# # Looping

for key in student:
    print(key, student[key])
    
for key, value in student.items():
    print(f"{key}-{value}")
    
# # TUPLE

empty_tuple = ()

numbers = (1, 2, 3, 4)

mixed_tuple = (1, 3.14, False, "Hello")

nested_tuple = ((1, 2, 3), (4, 5, 6))


tuple1 = (10, 20 , 30, 40, 50)

print(tuple1[1])
print(tuple1[-1])
print(tuple1[1:4])
print(tuple1[::-1])

# Looping the Tuple

colors = ("red", "blue", "green")

for c in colors:
    print(c)
    
for index, color in enumerate(colors):
    print(index, color)
    
    
# # sets 

empty_set = set()

numbers = {1, 2, 3, 4, 5}

mixed_set = {10, 3.14, True, "hello"}

my_set = {10, 20 ,30, 40, 50}

for num in my_set:
    print(num)
    
# set Functions

my_set.add(100)
print(my_set)
my_set.update([1, 2, 3])
print(my_set)
my_set.remove(50)
print(my_set)
my_set.discard(100)
print(my_set)


set1 = {1, 2, 3}
set2 = {2, 5, 6}

print(set1.union(set2))
print(set1.intersection(set2))
print(set2.difference(set1))
print(set1.symmetric_difference(set2))

# set comparison

set1.issubset(set2)
set2.issuperset(set2)

fs = frozenset([1, 2, 3, 4])
print(fs)

my_str = "Hello"
print(my_str.upper())

