import { colors } from '@/styles/settings/colors'
import { darken } from 'polished'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 0.5rem;
  border-radius: 0.1rem;

  background: ${colors.lightGray};

  width: 10rem;
  height: 10rem;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    border-radius: 0.3rem;
    transform: scale(1.04);
    background-color: ${darken(0.1, 'rgba(14, 167, 255, 0.5)')}
  }

  .tool-image {
    width: 5rem;
    height: 5rem;
  }

  .tool-name {
    font-size: 0.75rem;
    background: white;
    width: 90%;
    padding: 0.5rem 0;
    text-transform: uppercase;
    pointer-events: none;
    text-align: center;
  }
`