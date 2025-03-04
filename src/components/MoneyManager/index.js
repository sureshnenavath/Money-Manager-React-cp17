import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {optionId: 'INCOME', displayText: 'Income'},
  {optionId: 'EXPENSES', displayText: 'Expenses'},
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onChangeAmount = event => this.setState({amountInput: event.target.value})

  onChangeType = event => this.setState({typeInput: event.target.value})

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput, transactionsList} = this.state

    if (titleInput === '' || amountInput === '') return

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeInput,
    }

    this.setState({
      transactionsList: [...transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    })
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        transaction => transaction.id !== id,
      ),
    }))
  }

  getIncome = () => {
    const {transactionsList} = this.state
    return transactionsList
      .filter(transaction => transaction.type === 'INCOME')
      .reduce((acc, curr) => acc + curr.amount, 0)
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    return transactionsList
      .filter(transaction => transaction.type === 'EXPENSES')
      .reduce((acc, curr) => acc + curr.amount, 0)
  }

  getBalance = () => this.getIncome() - this.getExpenses()

  render() {
    const {transactionsList, titleInput, amountInput, typeInput} = this.state

    return (
      <div className="money-manager">
        <div className="welcome-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="highlight">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          balanceAmount={this.getBalance()}
          incomeAmount={this.getIncome()}
          expensesAmount={this.getExpenses()}
        />

        <div className="transaction-container">
          <form className="transaction-form" onSubmit={this.onAddTransaction}>
            <h2>Add Transaction</h2>
            <label>Title</label>
            <input
              type="text"
              value={titleInput}
              onChange={this.onChangeTitle}
            />

            <label>Amount</label>
            <input
              type="number"
              value={amountInput}
              onChange={this.onChangeAmount}
            />

            <label>Type</label>
            <select value={typeInput} onChange={this.onChangeType}>
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>

            <button className="submit-button" type="submit">
              Add
            </button>
          </form>

          <div className="transaction-history">
            <h2>History</h2>
            <ul className="ul-element">
              <div className="transaction-item">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>Delete</p>
              </div>
              {transactionsList.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transactionDetails={transaction}
                  deleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
