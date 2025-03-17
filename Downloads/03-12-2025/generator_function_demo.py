def square_numbers(nums):
    for i in range(nums):
        yield i * i
        
gen = square_numbers(3)
print(list(gen))


"""Feature       |  return    |  Yield
-----------------------------------
Memory           |  Returns                                     |  Yield
Function Type    | Used in Normal functions                     | Used in Generators
Execution        | Returns once                              | Can produce a sequence of values
Return Type      | Returns a single value                   | Returns a sequence of values
Memory usage     | More memory                              | Less memory (On demand)
Use case         | When you want to compute a single value     | When you want to iterate over a sequence of values
"""