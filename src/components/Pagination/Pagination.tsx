import { useEffect } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ReactPaginate from "react-paginate";
import * as bootstrap from "bootstrap";
import { useTranslation } from "react-i18next";
import Translation from "../Translation/Translation";

type Props = {
  pageNumber: number;
  totalPages: number;
  totalItens: number;
  setPageNumber: (page: number) => void;
};

const Pagination = ({ pageNumber, totalItens, totalPages, setPageNumber }: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <IoMdInformationCircleOutline data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title={t("system.Search for a character")} />
        {<Translation type="pagination" origin="Page" />} {pageNumber} {<Translation type="pagination" origin="of" />} {totalPages} - <span className="fw-bold">Total:</span> {totalItens}
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
