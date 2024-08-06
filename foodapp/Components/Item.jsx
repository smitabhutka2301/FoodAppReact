import styles from "./item.module.css";

export default function Item({ s }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.itemImageContainer}>
          <img
            className={styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100X100/${s.image}`}
          ></img>
        </div>
        <div className={styles.itemNameContainer}>
          <div className={styles.name}>{s.name}</div>
          <div className={styles.itemAmountContainer}>
            {" "}
            {s.amount} {s.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
