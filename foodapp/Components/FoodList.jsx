import FoodItem from "./FoodItem";
import styles from "./innerContainer.module.css";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className={styles.foodListContainer}>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
