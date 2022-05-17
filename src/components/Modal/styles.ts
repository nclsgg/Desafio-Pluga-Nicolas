import { colors } from '@/styles/settings/colors'
import { device } from '@/styles/settings/devices'
import { darken } from 'polished'
import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;

  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49, 49, 49, 0.8);
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 4rem;
  border-radius: 7px;
  width: 40.625rem;

  @media ${device.laptop} {
    width: 30.625rem;
  }

  @media ${device.tablet} {
    width: 25.625rem;
  }

  @media ${device.mobileL} {
    width: 20.625rem; 
    padding: 2.5rem 1rem;
  }

  @media ${device.mobileM} {
    width: 15.625rem;
  }

  @media ${device.mobileS} {
    width: 10.625rem;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    border: none;
    background: #FF605C;
    padding: 0.2rem 0.5rem;
    border-radius: 7px;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;

    &:hover {
      background: ${darken(0.2, '#FF605C')};
    }

    @media ${device.mobileL} {
      font-size: 0.75rem;
    }

  }

  .modal__content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  }

  .modal__tool--info {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      gap: 2rem;
    }
    
    .modal__tool--image {
      width: 8rem;
      height: 8rem;

      @media ${device.tablet} {
        width: 6rem;
        height: 6rem;
      }
    }

    .modal__tool--name-link {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;

      .modal__tool--name {
        text-transform: uppercase;
        text-align: center;
        background: ${colors.gray};
        width: 12.5rem;
        padding: 0.75rem 0;
        font-size: 0.875rem;

        @media ${device.tablet} {
          width: 10.5rem;
          padding: 0.5rem 0;
          font-size: 0.75rem;
        }
      }

      .modal__tool--link {
        text-decoration: none;
        text-align: center;
        color: white;
        background: ${colors.bluePluga};
        border-radius: 2rem;
        width: 10rem;
        padding: 0.75rem 0;
        font-size: 0.875rem;
        -webkit-transition: background-color 200ms linear;
        -ms-transition: background-color 200ms linear;
        transition: background-color 200ms linear;
        

        &:hover {
          cursor: pointer;
          background: ${darken(0.1, colors.bluePluga)};
        }

        @media ${device.tablet} {
          width: 9rem;
          padding: 0.6rem 0;
          font-size: 0.75rem;
        }
      }
    }

  }
  
  .modal__last-tools {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .modal__last-tools--title {
      font-size: 1rem;
      text-align: center;

      @media ${device.tablet} {
        font-size: 0.75rem;
      }
    }

    .modal__last-tools--list {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2rem;

      @media ${device.tablet} {
        gap: 1rem;
      }

      .modal__last-tools--item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        &:first-child {
          justify-content: flex-start;
        }

        .modal__last-tool--image {
          width: 5rem;
          height: 5rem;

          @media ${device.tablet} {
            width: 4rem;
            height: 4rem;
          }
        }

        .modal__last-tool--name {
          font-size: 0.75rem;
          text-align: center;
          text-transform: uppercase;
          background: ${colors.gray};
          width: 100%;
          padding: 0.5rem 0;

          @media ${device.tablet} {
            font-size: 0.5rem;
          }
        }
      }
    }
  }
`