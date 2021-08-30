import React, { useContext } from "react";
import { Currency, CurrencyFormatter } from "../../App-Constants";
import styles from "./HistoryList.module.css";
import { setTotalAmtContext } from "../../App";

const HistoryList = (props) => {
  let { trxHitoryObj } = props;
  const deleteEntryHandler = useContext(setTotalAmtContext);

  const deleteFun = (id) => {
    deleteEntryHandler.deleteEntry(id);
    console.log("hi");
  };

  return (
    <>
      <div className={`${trxHitoryObj.length > 0 ? styles.Container : ""}`}>
        {trxHitoryObj.length > 0
          ? trxHitoryObj.map((obj) => {
              return (
                <p
                  key={obj.id}
                  className={`${styles.historyList} ${
                    obj.isAddition === true ? styles.green : styles.red
                  }`}
                >
                  <span>
                    <span
                      className={styles.delete}
                      onClick={() => {
                        deleteFun(obj.id);
                      }}
                    >
                      &#10539;
                    </span>
                    {obj.text}
                  </span>
                  <span>
                    {Currency}
                    {CurrencyFormatter.format(obj.amount)}
                  </span>
                </p>
              );
            })
          : "No transaction data available"}
      </div>
    </>
  );
};
export default React.memo(HistoryList);
