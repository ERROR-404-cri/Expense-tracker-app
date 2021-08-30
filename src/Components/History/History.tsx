import React from "react";
import HistoryList from "./HistoryList";
import styles from "./History.module.css";
const History = (props) => {
  let { trxHitoryObj } = props;
  console.log(trxHitoryObj);

  return (
    <>
      <div className={styles.container}>
        <p>History</p>
        <p className={styles.line} />
      </div>
      <HistoryList trxHitoryObj={trxHitoryObj} />
    </>
  );
};
export default React.memo(History);
