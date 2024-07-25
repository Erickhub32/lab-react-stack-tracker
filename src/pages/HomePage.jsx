import { Link } from "react-router-dom";
import companies from './../companies.json'

function HomePage() {

  return (

    < div >
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <Link to={companies.name}></Link>
    </div >
  );
}

export default HomePage;
