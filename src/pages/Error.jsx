import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
        <div>
        <Link to="/">
          <button className="btn"><h4>Back</h4></button>
        </Link>
      </div><div><h3 >Error!!</h3></div>
      
      
    </div>
  );
};

export default Error;
