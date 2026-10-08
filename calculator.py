from operations import add, subtract, multiply, divide, modulus

print("Git Calculator")

num1 = float(input("Enter first number: "))
operator = input("Choose operation (+, -, *, /, %): ")
num2 = float(input("Enter second number: "))

if operator == "+":
    result = add(num1, num2)
elif operator == "-":
    result = subtract(num1, num2)
elif operator == "*":
    result = multiply(num1, num2)
elif operator == "/":
    result = divide(num1, num2)
elif operator == "%":
    result = modulus(num1, num2)
else:
    result = "Invalid operation"

print("Result:", result)
