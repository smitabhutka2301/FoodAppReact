import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
import defAvtar from "../src/Assets/noImg.jpg";

export default function FoodDeatil({ foodId }) {
  const [FoodRecipie, setFoodRecipi] = useState({});
  const [isLoading, setIsLoding] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const APIKEY = "747faaa1f5ab42cb851e39b7a4d7691e";

  useEffect(() => {
    async function fetchFood() {
      const resData = await fetch(`${URL}?apiKey=${APIKEY}`);

      //decode response
      const Data = await resData.json();
      setFoodRecipi(Data);
      setIsLoding(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}> {FoodRecipie.title}</h1>
        <img
          className={styles.recipeImage}
          src={FoodRecipie.image}
          alt=""
          onError={(e) => {
            e.target.onerror = null; // Prevents looping
            e.target.src = defAvtar; // Fallback image
          }}
        ></img>
        <div className={styles.recipieDetails}>
          <span>
            <strong> 🕰️ {FoodRecipie.readyInMinutes} Minutes </strong>
          </span>
          <span>
            <strong>
              {FoodRecipie.vegetarian ? "🥕 Vegetarian" : "🍗 Non-vegetarian"}
            </strong>
          </span>
          <span> 👫 {FoodRecipie.servings}</span>
          <span>
            <strong>{FoodRecipie.vegan ? "🌱🌱 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              {" "}
              Price Per Serving: ${FoodRecipie.pricePerServing / 100}
            </strong>
          </span>
        </div>{" "}
        <h1>Ingredients:</h1>
        <ItemList FoodRecipie={FoodRecipie} isLoading={isLoading} />
        <h1>Instructions</h1>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>"Data is Loading..."</p>
            ) : (
              FoodRecipie.analyzedInstructions[0].steps.map((s) => (
                <li>{s.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
