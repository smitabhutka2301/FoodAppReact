import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const APIKEY = "747faaa1f5ab42cb851e39b7a4d7691e";

export default function Serach({ foodData, setFoodData }) {
  //syntax of the useEffecthook
  //?query=pizza&apiKey=
  /*  useEffect(() => {
    function demo() {
      console.log("Demo function executed");
    }
    demo();
  }, [query]); */

  //Fetch call back
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${APIKEY}`);
      //decode json data
      const data = await res.json();
      console.log(data.results);

      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
