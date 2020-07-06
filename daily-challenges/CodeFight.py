# Given a positive integer n, output the string representation of all the numbers from 1 to n inclusive while replacing multiples of 5 with Code, multiples of 7 with Fight and multiples of both 5 and 7 with CodeFight.

def CodeFight(n):
  listOfIntegers = []
  for i in range(1,n+1):
    print(i)
    if i % 7 == 0 and i % 5 == 0:
      listOfIntegers.append('CodeFight')
    elif i % 5 == 0:
      listOfIntegers.append('Code')
    elif i % 7 == 0:
      listOfIntegers.append('Fight')
    else:
      listOfIntegers.append(str(i))
  return listOfIntegers
