import React, { useState } from "react";
import TotalBalance from "./Components/TotalBalance";
import History from "./Components/History/History";
import AddNewTransaction from "./Components/NewTransaction/AddNewTransaction";
import styles from "./App.module.css";

export const setTotalAmtContext = React.createContext();

const App = () => {
  const [TotalAmtObj, setTotalAmt] = useState({
    totalAmount: 0,
    addAmt: 0,
    expAmt: 0,
  });
  const [TrxHitoryObj, setTrxHitoryObj] = useState([]);

  const UpdateAmount = (amt, text) => {
    if (amt > 0) {
      setTotalAmt((prev) => {
        return {
          ...prev,
          totalAmount: prev.totalAmount + amt,
          addAmt: prev.addAmt + amt,
        };
      });
      setTrxHitoryObj((prev) => {
        return [
          { amount: amt, text: text, isAddition: true, id: Date.now() },
          ...prev,
        ];
      });
    } else if (amt < 0) {
      setTotalAmt((prev) => {
        return {
          ...prev,
          totalAmount: prev.totalAmount + amt,
          expAmt: prev.expAmt + amt,
        };
      });
      setTrxHitoryObj((prev) => {
        return [
          { amount: amt, text: text, isAddition: false, id: Date.now() },
          ...prev,
        ];
      });
    }
  };

  const deleteEntry = (stamp: number) => {
    setTrxHitoryObj((prev) => {
      let filtered = prev.filter((item) => item.id !== stamp);
      console.log(filtered);
      return filtered;
    });
  };
  return (
    <setTotalAmtContext.Provider
      value={{ setTotalAmtHandler: UpdateAmount, deleteEntry }}
    >
      <div className={styles.container}>
        <h4>Expense Tracker</h4>
        <TotalBalance totalAmtObj={TotalAmtObj} />
        <History trxHitoryObj={TrxHitoryObj} />
        <AddNewTransaction />
      </div>
    </setTotalAmtContext.Provider>
  );
};
export default React.memo(App);
