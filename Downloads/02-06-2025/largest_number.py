def check_largest_number(num1, num2, num3):
    if num1 > num2 and num1 > num3:
        print(f"{num1} is the largest number")
    elif num2 > num1 and num2 > num3:
        print(f"{num2} is the largest number")
    else:
        print(f"{num3} is the largest number")
        
def get_integer_values(prompt):
    while True:
        num = input(prompt)
        if num.lstrip('-').isdigit():
            return int(num)
        else:
            choice = input("Invalid input, If you wanna retry again Press 'R', or Press 'E' to Exit\nEnter your Choice: ").strip().upper()
            if choice == 'E':
                exit() 
    
     
def read_numbers():
    num1 = get_integer_values("Enter the first number: ")
    num2 = get_integer_values("Enter the second number: ")
    num3 = get_integer_values("Enter the third number: ")
    check_largest_number(num1, num2, num3)
    
def main():
    read_numbers()
     
if __name__ == "__main__":
    main()



    """
    1. Create Dunder variable and Call the main function
    2. In Main function, call a function to read all three numbers
    3. Define a function to validate the input values as integers ONLY
    4. Define a function to check the largest number and print the result 
    
    ENter a first number : a
    Invalid input, If you wanna retry again Press 'R', or Press 'E' to Exit
    Enter your Choice: R
    Enter a first number : 10
    Enter a second number : -
    Invalid input, If you wanna retry again Press 'R', or Press 'E' to Exit
    Enter your Choice: R
    Enter a second number : 20
    Enter a third number : ?!@#$
    Invalid input, If you wanna retry again Press 'R', or Press 'E' to Exit
    Enter your Choice: E
    
    
    
      
    """