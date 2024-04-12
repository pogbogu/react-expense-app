import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  credit,
  debit,
  saveCredit,
  saveDebit,
} from "../services/expenseReducer";

const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [party, setParty] = useState("");
  const [use, setUse] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.account.balance);
  const [message, setMessage] = useState(null);
  const [canTransact, setCantransact] = useState(false);
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    function checkBalance(obj, bal) {
      let value;
      if (obj.type === "CREDIT") {
        value = true;
      } else if (obj.type === "DEBIT" || "EXPENDITURE") {
        if (obj.amount <= bal) {
          value = true;
        }
      } else {
        value = false;
      }
      return value;
    }
    const val = checkBalance(transaction, balance);
    setCantransact(val);
  }, [transaction, balance]);

  const handleTransaction = () => {
    let newTransaction;
    function createTransaction() {
      switch (type) {
        case "EXPENDITURE":
          newTransaction = {
            amount: amount,
            type: type,
            date: date,
            use: use,
          };
          break;

        default:
          newTransaction = {
            amount: amount,
            type: type,
            date: date,
            party: party,
          };
      }
      return newTransaction;
    }
    const trans = createTransaction();
    setTransaction((state) => ({ ...state, ...trans }));

    console.log(transaction);

    function Transact(obj) {
      switch (obj.type) {
        case "EXPENDITURE":
          dispatch(debit(obj.amount));
          dispatch(saveDebit(obj));
          break;
        case "DEBIT":
          dispatch(debit(obj.amount));
          dispatch(saveDebit(obj));
          break;
        default:
          dispatch(credit(obj.amount));
          dispatch(saveCredit(obj));
      }
    }
    if (Object.values(transaction).length < 1) {
      console.log("No Object");
    } else {
      if (canTransact) {
        Transact(transaction);

        setMessage(<p className="green-text">Success</p>);
        console.log(canTransact);
      } else {
        setMessage(<p className="red-text">Failed! Not enough Money </p>);
      }
    }
  };

  return (
    <div className="box">
      <div className="form-div">
        <label>
          Amount:
          <input
            type="number"
            onChange={(e) => {
              e.preventDefault();
              setAmount(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="form-div">
        <label>
          Transcation Type:
          <select
            onChange={(e) => {
              e.preventDefault();
              setType(e.target.value);
            }}
          >
            <option>CREDIT</option>
            <option>DEBIT</option>
            <option>EXPENDITURE</option>
          </select>
        </label>
      </div>
      <div className="form-div">
        <label>
          {type === "EXPENDITURE"
            ? "Used For:"
            : type === "CREDIT"
            ? "From"
            : "To"}
          <input
            type="text"
            disabled={type === "" ? true : false}
            onChange={(e) => {
              e.preventDefault();
              type === "EXPENDITURE"
                ? setUse(e.target.value)
                : setParty(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="form-div">
        <label>
          Date:
          <input
            type="date"
            onChange={(e) => {
              e.preventDefault();
              setDate(e.target.value);
            }}
          />
        </label>
      </div>
      <button
        className="fine-btn"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          handleTransaction();
        }}
      >
        TRANSACT
      </button>
      {message}
    </div>
  );
};

export default AddTransaction;
