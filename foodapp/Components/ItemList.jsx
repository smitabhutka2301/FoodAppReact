import Item from "./Item";
import styles from "./innerContainer.module.css";

export default function ItemList({ FoodRecipie, isLoading }) {
  return (
    <div className={styles.foodListContainer}>
      {isLoading
        ? "Data Loading..."
        : FoodRecipie.extendedIngredients.map((s) => <Item s={s} />)}
    </div>
  );
}
