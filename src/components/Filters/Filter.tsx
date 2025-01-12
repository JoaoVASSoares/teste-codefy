import { useState } from "react";
import Tranlation from "../Translation/Translation";
import { useTranslation } from "react-i18next";

type FilterProps = {
  onFilter: (filters: { status?: string; query?: string }) => void;
};

const Filter = ({ onFilter }: FilterProps) => {
  const { t } = useTranslation();

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
          <option value="">{<Tranlation type="status" origin="All Status" />}</option>
          <option value="alive">{<Tranlation type="status" origin="Alive" />}</option>
          <option value="dead">{<Tranlation type="status" origin="Dead" />}</option>
          <option value="unknown">{<Tranlation type="status" origin="Unknown" />}</option>
        </select>
      </div>
      <div className="col-md-5">
        <input
          className="form-control me-2 search-input"
          type="search"
          placeholder={t("system.Search for a character")}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-md-2">
        <div className="d-grid gap-2">
          <button className="btn btn-success btn-block" type="button" onClick={handleSearch}>
            {<Tranlation type="system" origin="Search" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
