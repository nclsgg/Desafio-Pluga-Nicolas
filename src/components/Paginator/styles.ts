import { colors } from '@/styles/settings/colors'
import styled from 'styled-components'

export const PaginatorContainer = styled.div`
  display: flex;

  .paginator__list {
    display: flex;
    list-style: none;
    background-color: black;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${colors.lightGray};
      width: 3rem;
      height: 3rem;

      transition: 0.2s ease-in-out;

      &:hover {
        background: ${colors.darkGray};
        cursor: pointer;
        transform: scale(1.04);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      }

      &.active {
        background: ${colors.bluePluga};
      }

      &.disabled {
        opacity: 0.85;
        pointer-events: none;
      }

      p {
        pointer-events: none;
      }
    }
  }
`