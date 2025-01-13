import { IoMdInformationCircleOutline } from "react-icons/io";
import ReactPaginate from "react-paginate";
import Translation from "../Translation/Translation";

type Props = {
  pageNumber: number;
  totalPages: number;
  totalItens: number;
  setPageNumber: (page: number) => void;
};

const Pagination = ({ pageNumber, totalItens, totalPages, setPageNumber }: Props) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <IoMdInformationCircleOutline />
        {<Translation type="pagination" origin="Page" />} {pageNumber} {<Translation type="pagination" origin="of" />} {totalPages} - <span className="fw-bold">Total:</span>
        {totalItens}&nbsp;
        {<Translation type="pagination" origin="Character" />}
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
