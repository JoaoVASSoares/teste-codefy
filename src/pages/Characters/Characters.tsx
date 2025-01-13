import "./Characters.css";
import Card from "../../components/Cards/Cards";
import Filter from "../../components/Filters/Filter";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { defaultCharactersURLAPI } from "../../core/Constants";
import { ApiResponse } from "../../core/Interface";
import LoadingSpinner from "../../layout/LoadingSpinner/LoadingSpinner";
import { TFatchCharacters, TFilter } from "../../core/Types";

const Characters = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState<ApiResponse | null>();
  const [status, setStatus] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [error, setErro] = useState<boolean>(false);

  const handleFilter = (filter: TFilter) => {
    setStatus(filter.status ? filter.status : null);
    setQuery(filter.query ? filter.query : null);
    setPageNumber(1);
  };

  const fetchData = async ({ pageNumber = 1, status = null, query = null }: TFatchCharacters) => {
    setLoadingData(true);
    setErro(false);

    try {
      const response = await fetch(`${defaultCharactersURLAPI}/?page=${pageNumber}${query ? `&name=${query}` : ""}${status ? `&status=${status}` : ""}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setData(result);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setData(null);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData({ pageNumber, status, query });
  }, [pageNumber, status, query]);

  useEffect(() => {
    setPageNumber(1);
  }, [status, query]);

  return (
    <>
      <div className="card mt-20">
        <div className="card-header">
          <Filter onFilter={handleFilter} />
        </div>

        <div className="card-body">
          {loadingData && <LoadingSpinner />}
          {!loadingData && !error && (
            <>
              {data?.results && data.results.length > 0 ? (
                data.results.map((_, index) =>
                  index % 4 === 0 ? (
                    <div className="row" key={index}>
                      {data.results.slice(index, index + 4).map(character => (
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

        <div className="card-footer text-center">
          <Pagination pageNumber={pageNumber} totalPages={data?.info.pages || 1} totalItens={data?.info.count || 0} setPageNumber={setPageNumber} />
        </div>
      </div>
    </>
  );
};

export default Characters;
