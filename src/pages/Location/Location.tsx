import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SelectFilter from "../../components/Filters/SelectFilter";
import Translation from "../../components/Translation/Translation";
import { ICharacter, ILocation } from "../../core/Interface";
import { defaultLocationsURLAPI } from "../../core/Constants";
import LoadingSpinner from "../../layout/LoadingSpinner/LoadingSpinner";
import Card from "../../components/Cards/Cards";

const Location = () => {
  const [id, setID] = useState<number>(1);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [error, setErro] = useState<boolean>(false);
  const [results, setResults] = useState<ILocation | null>(null);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const { t } = useTranslation();

  const setResult = async (id: number) => {
    setLoadingData(true);
    setErro(false);

    try {
      const response = await fetch(`${defaultLocationsURLAPI}/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setResults(result);
      console.log(result);
      const characterData = await Promise.all(
        result.residents.map(async (url: string) => {
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
          <Translation type="system" origin="Location" />: <span className="text-success">{results?.name ? <Translation type="origins" origin={results.name} /> : ""}</span>
        </h1>
        <h5 className="text-center">
          <Translation type="system" origin="Dimension" />:{" "}
          <span className="text-success">{results?.dimension ? <Translation type="dimension" origin={results.dimension} /> : "-"}</span>
        </h5>
        <h6 className="text-center">
          <Translation type="system" origin="Type" />: <span className="text-success">{results?.type ? <Translation type="type" origin={results.type} /> : "-"}</span>
        </h6>
      </div>
      <div className="select-div">
        <SelectFilter listTitle={t("system.Choose a location")} name={t("system.Locations")} total={126} changeID={setID} />
      </div>
      <div className="card-body">
        {loadingData && <LoadingSpinner />}
        {!loadingData && !error && (
          <>
            {characters && characters.length > 0 ? (
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

export default Location;
