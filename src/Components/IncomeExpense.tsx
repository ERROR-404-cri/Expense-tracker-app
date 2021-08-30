import { useState, useEffect } from "react";
import { Currency, CurrencyFormatter } from "../App-Constants";
import styles from "./IncomeExpense.module.css";

const IncomeExpense = (props) => {
  return (
    <>
      <div className={styles.whiteBox}>
        <p className={styles.incomeBox}>
          income{" "}
          <span className={`${styles.priceBox} ${styles.greenBox}`}>
            {Currency}
            <span>{CurrencyFormatter.format(props.add.toFixed(2))}</span>
          </span>
        </p>
        <hr />
        <p className={styles.incomeBox}>
          expense{" "}
          <span className={`${styles.priceBox} ${styles.redBox}`}>
            {Currency}
            <span>{CurrencyFormatter.format(props.exp.toFixed(2))}</span>
          </span>
        </p>
      </div>
    </>
  );
};
export default IncomeExpense;
