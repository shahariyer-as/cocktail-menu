
import { NavLink } from "react-router-dom";
import SearchProducts from "../Products/SearchProducts/SearchProducts";

import "./Home.css";

const Home = () => {
  return (
    <div>
      {/*-------- nav bar --------- */}
      <nav>
        <ul className="nav">
          <li> <NavLink className="nav-link" to="/home">Home</NavLink></li>
          <li> <NavLink className="nav-link" to="/home">Product</NavLink></li>
          <li> <NavLink className="nav-link" to="/home">About</NavLink></li>
          
        </ul>
      </nav>

{/* search cocktail  */}
      <SearchProducts></SearchProducts>

     

  
    </div>
  );
};

export default Home;
