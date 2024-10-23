

const Sideber = ({recipeQueue, handleRemove, preparedRecipe}) => {
    return (
        <div className="md:w-1/3 border rounded-xl text-gray-600 p-2">
        
            {/*Want to cook table  */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 font-semibold text-2xl text-gray-800 text-center pb-3"> Want to cook : {recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeQueue.map((recipe, idx) => 
                        <tr key={idx} className="hover">
                            <th>{idx + 1}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td><button 
                                    onClick={() => handleRemove(recipe.recipe_id)}
                                    className="btn bg-green-400 px-2 py-1 md:px-6 md:py-2 text-gray-800 my-2 font-mudium rounded-full">Preparing</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {/* currently cooking table  */}
            <div className="overflow-x-auto mt-8">
                <h2 className="border-b-2 font-semibold text-2xl text-gray-800 text-center pb-3"> Currently Cooking : {preparedRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparedRecipe.map((recipe, idx) => 
                        <tr key={idx} className="hover">
                            <th>{idx + 1}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                        </tr>)}
                        <tr className="border-none">
                            <th></th>
                            <td></td>
                            <td>Total Time = 0</td>
                            <td>Total Calorie = 0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sideber;