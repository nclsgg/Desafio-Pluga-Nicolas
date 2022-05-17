import { memo, useState } from "react";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { PaginatorContainer } from "./styles";

interface IProps {
  pages: number,
  setCurrentPage: (page: number) => void,
  currentPage: number,
}

function Paginator({pages, setCurrentPage, currentPage}: IProps) {
  const [ firstPaginatorPage, setFirstPaginatorPage ] = useState<number>(0)
  const lastPaginatorPage = firstPaginatorPage + 5

  const pagesToPaginate = Array.from(Array(pages), (page, index) => {
    return index
  })

  const pagesToRenderPaginator = pagesToPaginate.slice(firstPaginatorPage, lastPaginatorPage)

  return (
    <PaginatorContainer data-testid="paginator">
      <ul className="paginator__list">
        <li onClick={() => setFirstPaginatorPage(firstPaginatorPage - 1)} className={firstPaginatorPage === 0 ? "disabled" : ""}>
          <GrFormPrevious /> 
        </li>
        {pagesToRenderPaginator.map((page, index) => {
          return <li data-testid="paginator__button" key={index} onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}>
            <p>{page + 1}</p>
          </li>
        })}
        <li onClick={() => setFirstPaginatorPage(firstPaginatorPage + 1)} className={lastPaginatorPage === pages ? "disabled" : ""}>
          <GrFormNext />
        </li>
      </ul>
    </PaginatorContainer>
  )
}

export default memo(Paginator)