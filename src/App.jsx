import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sideber from "./components/Sideber";


const App = () => {
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
        <Recipes></Recipes>
        {/* sidebar */}
        <Sideber></Sideber>
      </section>
    </div>
  );
};

export default App;