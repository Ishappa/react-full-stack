import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/app">App</Link>
      <AppNav />
    </div>
  );
}

export default HomePage;
