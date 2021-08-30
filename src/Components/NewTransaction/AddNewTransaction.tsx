import AddTransactionButton from "./AddTransactionButton";
import { useContext, useState } from "react";
import { setTotalAmtContext } from "../../App";
import { Currency } from "../../App-Constants";
import styles from "./AddNewTransaction.module.css";

const AddNewTransaction = () => {
  const setTotalAmtObj = useContext(setTotalAmtContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("+");
  const [error, setError] = useState("");
  const textInputHandler = (ev) => {
    setText(ev.target.value);
  };

  const amountInputHandler = (ev) => {
    setAmount(ev.target.value);
  };
  const addDataHandler = () => {
    if (amount[0] !== "+" && amount[0] !== "-") {
      setError("Please prefix amount with '+' or '-'");
      return;
    }
    amount.slice(1);
    if (!isNaN(+amount) && +amount !== 0) {
      setError("");
      let amt = +amount;
      let description = (text.length > 0 && text) || "New Transaction";
      setTotalAmtObj.setTotalAmtHandler(amt, description);
      setText("");
    } else {
      setError("Enter a valid amount");
    }
    setAmount(amount[0]);
  };

  return (
    <>
      <div className={styles.container}>
        <p>add new transaction</p>
        <p className={styles.line}></p>
        <div className={styles.inputFields}>
          <label htmlFor="text">text</label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={textInputHandler}
          />
        </div>
        <div className={styles.inputFields}>
          <label htmlFor="amount">
            amount (<span>{Currency}</span>)
          </label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={amountInputHandler}
          />
        </div>
        {error.length > 0 && (
          <p className={styles.error} tabIndex={0}>
            {error}
          </p>
        )}
      </div>
      <AddTransactionButton addDataHandlers={addDataHandler} />
    </>
  );
};
export default AddNewTransaction;
