import { useEffect } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ReactPaginate from "react-paginate";
import * as bootstrap from "bootstrap";

type Props = {
  pageNumber: number;
  totalPages: number;
  totalItens: number;
  setPageNumber: (page: number) => void;
};

const Pagination = ({ pageNumber, totalItens, totalPages, setPageNumber }: Props) => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <IoMdInformationCircleOutline
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Número total de páginas e o total de personagens encontrado"
        />
        Página {pageNumber} de {totalPages} - <span className="fw-bold">Total:</span> {totalItens}
      </div>
      <ReactPaginate
        className="pagination mt-2"
        previousLabel="Anterior"
        nextLabel="Próximo"
        nextLinkClassName="text-white text-decoration-none"
        previousLinkClassName="text-white text-decoration-none"
        previousClassName="btn btn-primary"
        nextClassName="btn btn-primary"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={data => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={totalPages}
        activeClassName="active"
        forcePage={pageNumber - 1}
      />
    </div>
  );
};

export default Pagination;
