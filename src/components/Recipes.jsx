import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    recipes.map((recipe, idx) =>
                        <div key={idx} className="card bg-base-100 shadow-xl border">
                            <figure className="px-8 pt-6 ">
                                <img className="w-full md:h-48 rounded-xl"
                                    src={recipe.recipe_img}
                                    alt="recipe image" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title text-xl text-gray-800 font-bold">{recipe.recipe_name}</h2>
                                <p className="text-gray-600 text-base font-semibold">{recipe.short_description}</p>
                                <h3 className="text-lg text-gray-800 font-medium">Ingredients : {recipe.ingredients.length}</h3>
                                <ul className="ml-8">
                                    {recipe.ingredients.map((item, idx) => <li className="list-disc text-gray-500 text-base" key={idx}>{item}</li>)}
                                </ul>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2 ">
                                        <i className="fa-regular fa-clock text-2xl"></i>
                                        <p className="text-gray-600">{recipe.preparing_time} minute.</p>
                                    </div>
                                    <div className="flex items-center gap-2 ">
                                    <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                                        <p className="text-gray-600">{recipe.calories} Calorie.</p>
                                    </div>
                                </div>

                                <div className="card-actions ">
                                    <button className="btn bg-green-400 px-8 text-lg text-gray-800 font-mudium rounded-full">Want To Cook</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Recipes;