import Paginator from '@/components/Paginator/PaginatorComponent'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('PaginatorComponent', () => {
  const mockSetPage = jest.fn()
  const numberOfPages = 15
  const currentPageNumber = 4
  const firstPagePaginatorNumber = 1
  const lastPagePaginatorNumber = firstPagePaginatorNumber + 4

  it('should render correctly', () => {
    render(<Paginator pages={numberOfPages} setCurrentPage={mockSetPage} currentPage={currentPageNumber}/>)

    const paginator = screen.getByTestId('paginator')

    expect(paginator).toBeInTheDocument()
  })

  it('should render number of pages correctly', () => {

    render(<Paginator pages={numberOfPages} setCurrentPage={mockSetPage} currentPage={currentPageNumber}/>)

    expect(screen.getByText(firstPagePaginatorNumber.toString())).toBeInTheDocument()
    expect(screen.getByText(lastPagePaginatorNumber.toString())).toBeInTheDocument()
  })

  it('should call setCurrentPage function on click in paginator', async () => {
    render(<Paginator pages={numberOfPages} setCurrentPage={mockSetPage} currentPage={currentPageNumber}/>)

    const paginatorButton = screen.getAllByTestId('paginator__button')

    await userEvent.click(paginatorButton[0])


    expect(mockSetPage).toHaveBeenCalled()
  })
})