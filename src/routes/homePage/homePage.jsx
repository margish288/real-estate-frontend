import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p className="description">
            Tired of endless scrolling and overwhelming listings? We make
            finding your perfect rental a breeze. Explore thousands of
            apartments, houses, and condos across. Our user-friendly search lets
            you filter by location, price, size, and the amenities that matter
            most to you - from modern kitchens to in-unit laundry and
            pet-friendly spaces.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>5+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>7</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>500+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
