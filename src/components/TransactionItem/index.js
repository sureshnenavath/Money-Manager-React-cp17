// src/components/TransactionItem/index.js
import './index.css'

const TransactionItem = ({transactionDetails, deleteTransaction}) => {
  const {id, title, amount, type} = transactionDetails

  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div>
        <button data-testid="delete" onClick={() => deleteTransaction(id)}>
          <img
            className="delete-button"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
