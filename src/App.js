import Products from "./API/Products";
import "./App.css";
import RecipeReviewCard from "./CRUD/Card";
import PostRequest from "./CRUD/PostRequest";
import PutRequest from "./CRUD/PutRequest";
import DaynamicCrud from "./CrudOperation/DaynamicCrud";
// import NavScrollExample from './Components/Baigan';
// import Navigation from './Components/Navbar/Navigation';
// import PostMethod from './CrudOperation/PostMethod';

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      {/* <NavScrollExample/> */}
      {/* <PostMethod/> */}
      {/* <DaynamicCrud/> */}
      {/* <Products/> */}
      {/* <PostRequest /> */}
      <PutRequest />
      {/* <RecipeReviewCard/> */}
    </div>
  );
}

export default App;
