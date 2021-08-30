import { useState } from "react";
import IncomeExpense from "./IncomeExpense";
import { Currency, CurrencyFormatter } from "../App-Constants";
import styles from "./TotalBalance.module.css";
const TotalBalance = (props) => {
  let { totalAmtObj } = props;
  console.log(props);
  return (
    <>
      <div className={styles.balance}>
        <p>your balance</p>
        <p className={styles.balanceAmount}>
          {Currency}
          <span>
            {CurrencyFormatter.format(totalAmtObj.totalAmount.toFixed(2))}
          </span>
        </p>
      </div>
      <IncomeExpense add={totalAmtObj.addAmt} exp={totalAmtObj.expAmt} />
    </>
  );
};
export default TotalBalance;
