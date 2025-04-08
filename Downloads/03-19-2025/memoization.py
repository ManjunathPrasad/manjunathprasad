# Python Recursion (Memoization)

'''Definiton: Memoization is 
an optimization technique used 
primarily to speed up 
computer programs 
by storing the results 
of expensive function calls 
and returning the cached result 
when the same inputs occur again.
'''
# Fibonacci Series
# 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610

# Fibonacci Series without Memoization
# def fibonacci(n):
#     if n <= 1:
#         return n
#     return fibonacci(n-1) + fibonacci(n-2)

# print(fibonacci(40))

# Fibonacci Series with Memoization

# def fibonacci(n, memo):
#     if n in memo:
#         return memo[n]
#     if n <= 1:
#         return n
#     memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
#     return memo[n]

# print(fibonacci(50, {}))

# using lru_cache

from functools import lru_cache

@lru_cache(maxsize=None) # cache the result indefinitely
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

print(fib(60))