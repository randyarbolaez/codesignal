# Albi has a hunch that the ages of the students can tell her a lot. She has a list of the ages of her students in the order they entered the classroom, and she wants to calculate the number of pairs of students such that their age difference is exactly 1, and the youngest student in the pair entered before the oldest. Please help my friend!

def studentsAge(students):
  differenceOfOne = 0
  for i in range(0,len(students)):
    for j in range(i):
      if students[i] - students[j] == 1:
        differenceOfOne +=1
  return differenceOfOne
