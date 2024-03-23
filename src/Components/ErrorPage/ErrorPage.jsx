import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps! page not found</h2>
            <NavLink to='/'><button>Go back to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;