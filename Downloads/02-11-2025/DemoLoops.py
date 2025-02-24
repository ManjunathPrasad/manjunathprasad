# # Loops in Python 

# # while Loop
# ''' 
# while expression:
#     statements 
# '''
# # write a python script to print sum of odd and even numbers until a specific number
# '''
# interval = 10
# sum_of_odd_numbers = 1 + 3 + 5 + 7 + 9 = 25
# sum_of_Even_numbers = 0 + 2 + 4 + 6 + 8 + 10 = 30  

# '''
# # def get_valid_interval(interval):
    


# def sum_of_odd_even_numbers():
    
#     interval = int(input("Enter an interval number:"))
    
#     # get_valid_interval(interval)
    
#     iteration = 0
#     sum_of_even_numbers = 0
#     sum_of_odd_numbers = 0
    
#     while iteration <= interval:
#         if iteration % 2 == 0:
#             sum_of_even_numbers = sum_of_even_numbers + iteration
#         else:
#             sum_of_odd_numbers = sum_of_odd_numbers + iteration
#         iteration = iteration + 1  
    
#     print(f"Sum of Even Numbers:{sum_of_even_numbers}")
#     print(f"Sum of Odd Numbers:{sum_of_odd_numbers}")

# def main():
#     sum_of_odd_even_numbers()
    
# if __name__ == "__main__":
#     main()
    
# for Loop 

'''
Basic Syntax

for variable in sequence:
    statements 

'''

# numbers = [1, 2, 3, 4, 5]

# for n in numbers:
#     print(n)

for n in range(10):
    print(n)
else:
    print("Loop Finished")
    
# student_scores = {'Alice':85, 'Joy': 98, 'Mary': 76}

# for name, score in student_scores.items():
#     print(f"{name}:{score}")