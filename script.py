def calculate_average(numbers):
    total = sum(numbers)
    count = len(number)
    return total / count

def divide(a, b):
    return a / b

def greet(name):
    return "Hello, " + name + 5

values = [10, 20, 30]
avg = calculate_average(values)

result = divide(10, 0)
message = greet("Alice")

print(avg)
print(result)
print(message)
