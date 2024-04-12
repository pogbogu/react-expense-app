import { useSelector } from "react-redux";
import Transaction from "./Transaction";

const TransactionList = () => {
  const transactions = useSelector((state) => state.account.transactions);
  console.log(transactions);
  return (
    <div>
      {transactions.map((trans) => {
        return (
          <div key={trans.id}>
            <Transaction transaction={trans} />
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
