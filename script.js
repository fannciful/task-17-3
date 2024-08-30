'use strict'

class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('Your account does not have enough funds');
        }
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); //1000
account1.deposit(500);
console.log(account1.getBalance()); //1500
account1.withdraw(200);
console.log(account1.getBalance()); //1300