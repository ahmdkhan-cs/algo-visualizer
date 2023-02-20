import { Link, useLocation} from "react-router-dom";

const Topbar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Algo Visualizer</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        {
                            location.pathname.includes("/searching") ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/searching/sequential">Sequential Search</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/searching/binary">Binary Search</Link>
                                    </li>
                                </>
                            ) : (
                                <></>
                            )
                        }
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-light me-2">Login</button>
                        <button className="btn btn-outline-light">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Topbar;