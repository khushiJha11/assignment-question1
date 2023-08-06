import styles from "./ListRow.module.css";

const ListRow = ({ children }) => {
  return <tr className={styles.cell}>{children}
  {
   
  }</tr>;
  
};

export default ListRow;
