import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="container">
      <h1 className="heading">404</h1>
      <p className="description">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="redirection">
        Home
      </Link>
    </section>
  );
};

export default NotFound;
