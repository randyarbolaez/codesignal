# Determine whether a given fraction is proper.


def properOrImproper(a):
    if a[1] == 0:
        return 'Improper'
    if a[0] == 0:
        return 'Proper'
    if abs(a[1] / a[0]) > 1:
        return 'Proper'
    return 'Improper'
