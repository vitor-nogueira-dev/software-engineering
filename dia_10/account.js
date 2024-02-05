class AccountClient {
  constructor(numberAccount, balance, debit, credit) {
    this.numberAccount = numberAccount;
    this.balance = balance;
    this.debit = debit;
    this.credit = credit;
  }

  calculateBalance() {
    return this.balance + this.credit - this.debit;
  }

  formatBalance(value) {
    return `R$ ${value?.toFixed(2)}`;
  }

  getBalance() {
    const balance = this.calculateBalance();
    if (balance < 0) {
      return alert(`Saldo negativo: R$ ${this.formatBalance(balance)}`);
    } else {
      return alert(`Saldo positivo: R$ ${this.formatBalance(balance)}`);
    }
  }
}

const account = prompt('Digite o número da conta: ');
const balance = +prompt('Digite o saldo da conta: ');
const debit = +prompt('Digite o débito da conta: ');
const credit = +prompt('Digite o crédito da conta: ');

const accountClient = new AccountClient(account, balance, debit, credit);
accountClient.getBalance();
