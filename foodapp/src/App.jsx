import { useState } from "react";
import Serach from "../Components/Search";
import FoodList from "../Components/FoodList";
import Nav from "../Components/Nav";
import "./App.css";
import Container from "../Components/Container";
import InnerContainer from "../Components/InnerContainer";
import FoodDeatil from "../Components/FoodDeatil";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("680975");

  return (
    <div className="App">
      <Nav />

      <Serach foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>

        <InnerContainer>
          <FoodDeatil foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
