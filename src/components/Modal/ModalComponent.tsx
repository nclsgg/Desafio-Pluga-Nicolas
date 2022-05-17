import { ITools } from "@/types/tools";
import { memo, useEffect, useState } from "react";
import { ModalWrapper, ModalContainer } from "./styles";
interface IProps {
  tool: ITools | undefined,
  lastTools: ITools[],
  closeModal: () => void
}

function ModalComponent({tool, lastTools, closeModal}: IProps) {
  const filteredLastTools = lastTools.filter(lastTool => lastTool.app_id !== tool?.app_id)

  return (
    <ModalWrapper>
      <div data-testid="overlay" className="overlay" onClick={closeModal}></div>
      <ModalContainer>
        <button data-testid="close-button" className="close-button" onClick={closeModal}>X</button>
        <div className="modal__content">
          <div className="modal__tool--info">
            <img className="modal__tool--image" src={tool?.icon}/>
            <div className="modal__tool--name-link">
              <p className="modal__tool--name">{tool?.name}</p>
              <a className="modal__tool--link" href={tool?.link} target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </div>
          </div>
          {filteredLastTools.length > 0 &&
          <div className="modal__last-tools">
            <p className="modal__last-tools--title">ÚLTIMAS FERRAMENTAS VISUALIZADAS</p>
            <div className="modal__last-tools--list">
              {filteredLastTools.slice(0, 3).map((lastTool, index) => {
                return (
                  <div data-testid="last-tools--item" className="modal__last-tools--item" key={index}>
                    <img className="modal__last-tool--image" src={lastTool.icon}/>
                    <p className="modal__last-tool--name">{lastTool.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
          }
        </div>
      </ModalContainer>
    </ModalWrapper>
  )
}

export default memo(ModalComponent);