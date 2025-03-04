import './index.css'

const MoneyDetails = ({balanceAmount, incomeAmount, expensesAmount}) => (
  <div className="money-details">
    <div className="detail-card balance">
      <img
        className="details-item-image"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
      />
      <div>
        <p>Your Balance</p>
        <p data-testid="balanceAmount">Rs {balanceAmount}</p>
      </div>
    </div>

    <div className="detail-card income">
      <img
        className="details-item-image"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
      />
      <div>
        <p>Your Income</p>
        <p data-testid="incomeAmount">Rs {incomeAmount}</p>
      </div>
    </div>

    <div className="detail-card expenses">
      <img
        className="details-item-image"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
      />
      <div>
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">Rs {expensesAmount}</p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
