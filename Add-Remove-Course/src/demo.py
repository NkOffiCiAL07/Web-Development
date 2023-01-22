#gcd of two numbers
def gcd(a,b):
    if a==0:
        return b
    return gcd(b%a,a)

#lcm of two numbers
def lcm(a,b):
    return (a*b)/gcd(a,b)

a = 15
b = 20
print('GCD of', a, 'and', b, 'is', gcd(a, b))
print('LCM of', a, 'and', b, 'is', lcm(a, b))
