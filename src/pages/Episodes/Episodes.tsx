import "./Episodes.css";
import { useEffect, useState } from "react";
import SelectFilter from "../../components/Filters/SelectFilter";
import { defaultEpisodesURLAPI } from "../../core/Constants";
import { ICharacter, IEpisode } from "../../core/Interface";
import LoadingSpinner from "../../layout/LoadingSpinner/LoadingSpinner";
import Card from "../../components/Cards/Cards";
import { episodeFormatDate } from "../../utils/Utils";

const Episodes = () => {
  const [results, setResults] = useState<IEpisode | null>(null);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [id, setID] = useState<number>(1);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [error, setErro] = useState<boolean>(false);

  const setResult = async (id: number) => {
    setLoadingData(true);
    setErro(false);

    try {
      const response = await fetch(`${defaultEpisodesURLAPI}/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setResults(result);

      const characterData = await Promise.all(
        result.characters.map(async (url: string) => {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Erro ao buscar personagem: ${url}`);
          }

          const charactersResult = await response.json();

          if (charactersResult.error) {
            throw new Error(charactersResult.error);
          }

          return charactersResult;
        }),
      );

      setCharacters(characterData);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setResults(null);
      setCharacters([]);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    setResult(id);
  }, [id]);

  return (
    <div className="card mt-20">
      <div className="card-header">
        <h1 className="text-center mb-3">
          Nome do episódio: <span className="text-success">{results?.name}</span>
        </h1>
        <h5 className="text-center">Data de transmissão: {results?.air_date ? episodeFormatDate(results?.air_date) : ""}</h5>
      </div>
      <div className="select-div">
        <SelectFilter name="Episódio" total={51} changeID={setID} />
      </div>
      <div className="card-body">
        {loadingData && <LoadingSpinner />}
        {!loadingData && !error && (
          <>
            {characters ? (
              characters.map((_, index) =>
                index % 4 === 0 ? (
                  <div className="row" key={index}>
                    {characters.slice(index, index + 4).map(character => (
                      <Card
                        id={character.id}
                        key={character.id}
                        imageURL={character.image}
                        name={character.name}
                        gender={character.gender}
                        status={character.status}
                        origin={character.origin.name}
                        locationName={character.location.name}
                      />
                    ))}
                  </div>
                ) : null,
              )
            ) : (
              <div className="text-muted text-center">Nenhum personagem encontrado.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Episodes;
