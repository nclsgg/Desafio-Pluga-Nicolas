import { colors } from '@/styles/settings/colors'
import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  background: ${colors.gray};
  border-radius: 0.5rem;
  width: 100%;
  max-width: 60rem;
  align-items: center;
  padding: 0 1rem;

  .search-input {
    background: none;
    border: none;
    width: 100%;
    padding: 1rem 0.5rem;
  }

  p {
    color: white;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${colors.darkGray}
  }
`