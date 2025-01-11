import { useState } from "react";
import "./Home.css";

const Home = () => {
  // Estados para o filtro de status e busca
  const [status, setStatus] = useState<string>(""); // Estado para o status
  const [searchQuery, setSearchQuery] = useState<string>(""); // Estado para o campo de busca

  // Função chamada ao clicar no botão de busca
  const handleSearch = () => {
    console.log("Status selecionado:", status);
    console.log("Texto de busca:", searchQuery);

    // Aqui você pode adicionar lógica para filtrar os personagens ou fazer a chamada à API
  };
  return (
    <>
      <div className="card mt-50">
        <div className="card-header">
          <div className="row">
            <div className="col-md-5">
              <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
                <option selected value="">
                  Status
                </option>
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
              />
            </div>
            <div className="col-md-2 ">
              <div className="d-grid gap-2">
                <button className="btn btn-success btn-block" type="button" onClick={handleSearch}>
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body"></div>
      </div>
    </>
  );
};

export default Home;
