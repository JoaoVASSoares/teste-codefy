import "./Character.css";
import { useParams } from "react-router-dom";
import { defaultCharactersURLAPI } from "../../core/Constants";
import { useEffect, useState } from "react";
import { ICharacter } from "../../core/Interface";
import LoadingSpinner from "../../layout/LoadingSpinner/LoadingSpinner";
import { getBadgeClass, getOrigin } from "../../utils/Utils";
import { EGenderCharacter, EStatusCharacter } from "../../core/Enums";

const Character = () => {
  const [character, setCharacter] = useState<ICharacter>();
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  const fetchData = async (id: string) => {
    setLoadingData(true);
    try {
      const response = await fetch(`${defaultCharactersURLAPI}/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setCharacter(result);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setCharacter(undefined);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <>
      {loadingData && (
        <div className="mt-5">
          <LoadingSpinner />
        </div>
      )}
      {!loadingData && (
        <div className="d-flex align-items-center justify-content-center card-character">
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-12">
                <div className="position-relative">
                  <span className={`badge position-absolute top-0 start-0 m-2 p-3 ${character?.status ? getBadgeClass(character!.status) : ""}`}>
                    <span className="fs-6">{character?.status ? EStatusCharacter[character.status] : ""}</span>
                  </span>
                  <img src={character?.image} className="img-fluid rounded-start" width={"540px"} height={"auto"} alt="..." />
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-12">
                <div className="card-body">
                  <h5 className="card-title">{character?.name}</h5>
                  <p className="card-text">
                    <div>
                      <span className="fw-bold">Gênero: </span>
                      {character?.gender ? EGenderCharacter[character.gender] : ""}
                    </div>
                    <div>
                      <span className="fw-bold">Apariçoẽs:</span> {character?.episode.length} episódios
                    </div>
                    <div>
                      <span className="fw-bold">Ultma localização:</span> {character?.location ? getOrigin(character?.location.name) : ""}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Character;
