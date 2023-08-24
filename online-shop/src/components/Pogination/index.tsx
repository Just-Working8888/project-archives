import React from "react";
import cls from "./pagination.module.scss";
import ReactPaginate from "react-paginate";
type PaginateProps = {
  onChangePage: (page:number) => void;
  CurrentPage: number;
};
export const Paginate: React.FC<PaginateProps> = ({ onChangePage, CurrentPage }) => {
  return (
    <ReactPaginate
      className={cls.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={CurrentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

