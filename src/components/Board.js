import React from "react";
import { useSelector } from "react-redux";

const Board = () => {
  const income = useSelector((state) => state.account.total_income);
  const expenses = useSelector((state) => state.account.total_expenses);
  return (
    <div className="board">
      <h3>
        Total income: <span className="green-text">{income} </span>| Total
        Expenses: <span className="red-text">{expenses}</span>
      </h3>
    </div>
  );
};

export default Board;
