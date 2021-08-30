import styles from "./AddTransactionButton.module.css";

const AddTransactionButton = (props) => {
  const addTransactionFun = () => {
    props.addDataHandlers();
  };
  return (
    <button
      type="submit"
      onClick={addTransactionFun}
      tabIndex={0}
      className={styles.btn}
    >
      Add transaction
    </button>
  );
};
export default AddTransactionButton;
