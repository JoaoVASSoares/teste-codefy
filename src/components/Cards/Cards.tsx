import { Link } from "react-router-dom";
import { GenderCharacter, StatusCharacter } from "../../core/Enums";
import "./Cards.css";
import { getBadgeClass, getOrigin } from "../../core/ExtraFunctions";

type Props = {
  id: number;
  imageURL: string;
  name: string;
  gender: keyof typeof GenderCharacter;
  status: keyof typeof StatusCharacter;
  origin: string;
  locationName: string;
};

const Card = (props: Props) => {
  return (
    <div className="col-md-3">
      <Link to={`/character/${props.id}`} className="text-decoration-none">
        <div className="card caracter-card">
          <div className="card position-relative">
            <span className={`badge position-absolute top-0 start-0 m-2 p-2 ${getBadgeClass(props.status)}`}>{StatusCharacter[props.status]}</span>{" "}
            <img src={props.imageURL} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              <div>
                <span className="text-bold">Gênero: </span>
                {GenderCharacter[props.gender]}
              </div>
              <div>
                <span className="text-bold">Origem: </span>
                {getOrigin(props.origin)}
              </div>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
