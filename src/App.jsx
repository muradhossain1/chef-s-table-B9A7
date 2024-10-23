import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sideber from "./components/Sideber";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])

  const handlerRecipeQueue = (recipe) =>{
    const isExit = recipeQueue.find(privious => privious.recipe_id === recipe.recipe_id)
    if(!isExit){
      setRecipeQueue([...recipeQueue, recipe])
    }else{
      alert('Recipe already exists in the queue!!')
    }
  }

  const  handleRemove = (id) => {
    // find which recipe to remove
    const removeRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    //remove from want to cook table
    const updateQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updateQueue)
    setPreparedRecipe([...preparedRecipe, removeRecipe] )
  }

  return (
    <div className="container mx-auto px-4">
      {/* header  */}
      <Header></Header>
      {/* banner  */}
      <Banner></Banner>
      {/* our recipes */}
      <OurRecipes></OurRecipes>
      {/* recipes cards section  */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* cards section  */}
        <Recipes handlerRecipeQueue={handlerRecipeQueue}></Recipes>
        {/* sidebar */}
        <Sideber preparedRecipe={preparedRecipe} handleRemove={handleRemove} recipeQueue={recipeQueue}></Sideber>
      </section>
    </div>
  );
};

export default App;