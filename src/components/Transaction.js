import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.type.toLowerCase() === "credit" ? "+" : "-";
  const text =
    transaction.type.toLowerCase() === "credit"
      ? "Money Received From"
      : transaction.type.toLowerCase() === "expenditure"
      ? "Used For"
      : "Money Sent to";

  return (
    <div className="transaction-cont">
      <div
        className={
          transaction.type.toLowerCase() === "credit"
            ? "green-board"
            : "red-board"
        }
      >
        <div className="trans">
          <p>
            Amount:
            <span
              className={
                transaction.type.toLowerCase() === "credit"
                  ? "green-text"
                  : "red-text"
              }
            >
              {sign} {transaction.amount}
            </span>
          </p>
          <p>
            {text}:{transaction?.party || transaction?.use}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
