import { useState } from "react";

type FilterProps = {
  onFilter: (filters: { status?: string; query?: string }) => void;
};

const Filter = ({ onFilter }: FilterProps) => {
  const [status, setStatus] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    const filtros: { status?: string; query?: string } = {};

    if (status) {
      filtros.status = status;
    }
    if (searchQuery) {
      filtros.query = searchQuery;
    }

    onFilter(filtros);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">Todos os status</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
      </div>
      <div className="col-md-5">
        <input
          className="form-control me-2 search-input"
          type="search"
          placeholder="Buscar um personagem"
          aria-label="Buscar"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-md-2">
        <div className="d-grid gap-2">
          <button className="btn btn-success btn-block" type="button" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
