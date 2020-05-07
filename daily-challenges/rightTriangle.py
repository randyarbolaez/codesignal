# For a given triangle determine if it is a right triangle.


def rightTriangle(sides):
    sides = sorted(sides)
    return sides[0] ** 2 + sides[1] ** 2 == sides[2] ** 2
