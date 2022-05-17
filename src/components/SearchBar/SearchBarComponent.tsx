import { memo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchBarContainer } from "./styles";

interface IProps {
  setToBeSearched: (event: string) => void;
}

function SearchBar({setToBeSearched}: IProps) {
  return (
    <SearchBarContainer>
      <FaSearch/>
      <input className="search-input" placeholder="BUSCAR FERRAMENTA" onChange={event => setToBeSearched(event.target.value)}></input>
    </SearchBarContainer>
  )
}

export default memo(SearchBar);