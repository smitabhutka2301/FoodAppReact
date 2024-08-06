import styles from "./container.module.css";
export default function Container({ children }) {
  //just provide structure to our application
  return <div className={styles.parentContainer}>{children}</div>;
}
