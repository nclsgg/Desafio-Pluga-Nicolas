import styled from 'styled-components';
import { device } from './settings/devices';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 50vw;
    align-items: center;
    padding: 2em;
  }
`

export const CardsContainer = styled.div`
  display: grid;

  row-gap: 3rem;
  column-gap: 5rem;

  grid-template-columns: repeat(4, minmax(min(10rem, 100%), 1fr));

  @media ${device.laptop} {
    grid-template-columns: repeat(3, minmax(min(10rem, 100%), 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(min(10rem, 100%), 1fr));
    column-gap: 2rem;
  }
`