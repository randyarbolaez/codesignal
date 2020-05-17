# Call two integers a and b similar if divisor divides both a and b or if it doesn't divide either. Given integers a, b and divisor, check if a and b are similar.


def areSimilarNumbers(a, b, divisor):
    if (a % divisor == 0 and b % divisor == 0) != (a % divisor != 0 and b % divisor != 0):
        return True
    return False
