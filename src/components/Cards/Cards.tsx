import "./Cards.css";
import { Link } from "react-router-dom";
import { EGenderCharacter, EStatusCharacter } from "../../core/Enums";
import { getBadgeClass, getOrigin } from "../../utils/Utils";

type Props = {
  id: number;
  imageURL: string;
  name: string;
  gender: keyof typeof EGenderCharacter;
  status: keyof typeof EStatusCharacter;
  origin: string;
  locationName: string;
};

const Card = ({ id, imageURL, status, name, gender, origin }: Props) => {
  return (
    <div className="col-md-3">
      <Link to={`/character/${id}`} className="text-decoration-none">
        <div className="card caracter-card">
          <div className="card position-relative">
            <span className={`badge position-absolute top-0 start-0 m-2 p-2 ${getBadgeClass(status)}`}>{EStatusCharacter[status]}</span>{" "}
            <img src={imageURL} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <div>
                <span className="fw-bold">Gênero: </span>
                {EGenderCharacter[gender]}
              </div>
              <div>
                <span className="fw-bold">Origem: </span>
                {getOrigin(origin)}
              </div>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
