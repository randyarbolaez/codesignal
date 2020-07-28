# Given two integers a and b, return the sum of the numerator and the denominator of the reduced fraction a/b.

from fractions import Fraction

def FractionFunc(a, b):
  denominator = str(Fraction(a,b))[str(Fraction(a,b)).find('/')+1:]
  numerator = str(Fraction(a,b))[:str(Fraction(a,b)).find('/')]
  return int(numerator) + int(denominator)
