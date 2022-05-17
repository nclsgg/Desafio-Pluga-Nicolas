import SearchBar from '@/components/SearchBar/SearchBarComponent'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('SearchBar Component', () => {
  it('should render correctly', () => {
    const mockSetToBeSearched = jest.fn()
    render(<SearchBar setToBeSearched={mockSetToBeSearched}/>)

    const searchInput = screen.getByPlaceholderText('BUSCAR FERRAMENTA')

    expect(searchInput).toBeInTheDocument()
  })

  it('should call setToBeSearched when input value changes', async () => {
    const mockSetToBeSearched = jest.fn()
    render(<SearchBar setToBeSearched={mockSetToBeSearched}/>)

    const searchInput = screen.getByPlaceholderText('BUSCAR FERRAMENTA')

    await act(async () => {
      fireEvent.change(searchInput, {target: {value: "Pluga"}})
    })

    expect(mockSetToBeSearched).toHaveBeenCalled()
  })
})
