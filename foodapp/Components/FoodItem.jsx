import styles from "./fooditem.module.css";
import defAvtar from "../src/Assets/noImg.jpg";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.itemImage}
        src={food.image}
        onError={(e) => {
          e.target.onerror = null; // Prevents looping
          e.target.src = defAvtar; // Fallback image
        }}
      ></img>

      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.itemBtnContainer}>
        <button
          onClick={() => {
            setFoodId(food.id);
            console.log(food.title + "has id= " + food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
