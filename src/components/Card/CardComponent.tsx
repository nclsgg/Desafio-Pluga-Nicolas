import { ITools } from "@/types/tools";
import { memo } from "react";
import { CardContainer } from "./styles";



interface IProps {
  tool: ITools,
  cardClick: (tool: ITools) => void
}

function Card({tool, cardClick}: IProps) {
  return(
    <CardContainer data-testid="card" onClick={() => cardClick(tool)}>
      <img className="tool-image" src={tool.icon}/>
      <p className="tool-name">{tool.name}</p>
    </CardContainer>
  )
}

export default memo(Card);