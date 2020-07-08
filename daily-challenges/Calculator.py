# You should implement a calculate that takes three arguments - two integer values and operation symbol. The following operators are acceptable:

def Calculator(a, operation, b):
  if operation == '+':
    return a + b
  if operation == '-':
    return a - b
  if operation == '*':
    return a * b
  if operation == '/':
    return a//b
  if operation == '^':
    return a ** b
  if operation == '/^':
    return math.sqrt(a)
