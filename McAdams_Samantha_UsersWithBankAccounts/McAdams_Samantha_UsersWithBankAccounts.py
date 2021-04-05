def deposit(self, amount):
        self.balance += amount
        return self
    
    def withdraw(self, amount):
        if(amount <= self.balance):
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def displayAccountInfo(self):
        print("Balance:", self.balance)
        return self
    
    def yieldInterest(self):
        if(self.balance >= 0):
            self.balance += self.balance*self.intRate
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(0.01)

    def makeDeposit(self, amount):
        self.account.deposit(amount)
        return self

    def makeWithdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def displayUserBalance(self):
        self.account.displayAccountInfo()
        return self

harry = User("Harry Potter", "voldilocks@hogwarts.com")