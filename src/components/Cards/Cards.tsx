import "./Cards.css";
import { Link } from "react-router-dom";
import { getBadgeClass } from "../../utils/Utils";
import Tranlation from "../Translation/Translation";

type Props = {
  id: number;
  imageURL: string;
  name: string;
  gender: string;
  status: string;
  origin: string;
  locationName: string;
};

const Card = ({ id, imageURL, status, name, gender, origin }: Props) => {
  return (
    <div className="col-md-3">
      <Link to={`/character/${id}`} className="text-decoration-none">
        <div className="card caracter-card">
          <div className="card position-relative">
            <span className={`badge position-absolute top-0 start-0 m-2 p-2 ${getBadgeClass(status)}`}>{<Tranlation type="status" origin={status} />}</span>{" "}
            <img src={imageURL} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <div>
                <span className="fw-bold">{<Tranlation type="genders" origin={"Gender"} />}: </span>
                {<Tranlation type="genders" origin={gender} />}
              </div>
              <div>
                <span className="fw-bold">{<Tranlation type="origins" origin="Origin" />} : </span>
                {<Tranlation type="origins" origin={origin} />}
              </div>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
