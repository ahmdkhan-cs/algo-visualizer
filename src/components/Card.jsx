import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Card = ({imgUrl, title, text, link}) => {
    return (
        <div className="card shadow w-100">
            <img src={imgUrl} className="card-img-top" alt="img" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <Link to={link} className="btn btn-outline-dark visualize-btn">Visualize <FontAwesomeIcon className="icon" icon={faArrowRight}/></Link>
            </div>
        </div>
    )
}

export default Card;