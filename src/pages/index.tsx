import api from "@/api/api";
import Card from "@/components/Card/CardComponent";
import ModalComponent from "@/components/Modal/ModalComponent";
import Paginator from "@/components/Paginator/PaginatorComponent";
import SearchBar from "@/components/SearchBar/SearchBarComponent";
import { CardsContainer, Wrapper } from "@/styles/Dashboard";
import { ITools } from "@/types/tools";
import { useCallback, useEffect, useState } from "react";

export async function getStaticProps () {
  const response = await api.get("/ferramentas_search.json")
  const data = response.data;

  return {
    props: {
      tools: data 
    }
  }
}

interface IProps {
  tools: ITools[],
}

export default function Home({tools}: IProps) {
  const allTools = tools
  const [ searchedTools, setSearchedTools ] = useState<ITools[]>(allTools)
  const [ toBeSearched, setToBeSearched ] = useState<string>("")
  const [ showModal, setShowModal ] = useState<boolean>(false)
  const [ toolsPerPage, setToolsPerPage ] = useState<number>(12)
  const [ currentPage, setCurrentPage ] = useState<number>(0)
  const [ clickedTool, setClickedTool] = useState<ITools>()
  const [ lastClickedTools, setLastClickedTools ] = useState<ITools[]>([])

  const pages = Math.ceil(searchedTools.length / toolsPerPage);
  const startIndex = currentPage * toolsPerPage;
  const endIndex = startIndex + toolsPerPage;
  const currentTools = searchedTools.slice(startIndex, endIndex);

  function cleanTextsAndSearch(toolName: string) {
    const cleanText = toolName.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const newSearchedTools = allTools.filter(tool => {
      const cleanToolName = tool.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
      return cleanToolName.includes(cleanText);
    });
    setCurrentPage(0)
    setSearchedTools(newSearchedTools);
  }
  
  useEffect(() => {
    cleanTextsAndSearch(toBeSearched)
  }, [toBeSearched])

  function organizeLastClickedTools(tool: ITools) {
    const newLastClickedTools = Array.from(lastClickedTools)

    //Add new tool to position 0 of array if doenst already exists
    if (!newLastClickedTools.includes(tool)) {
      newLastClickedTools.unshift(tool)
    }

    //If tool already exists in array, set it to position 0
    if (newLastClickedTools.includes(tool)) {
      const index = newLastClickedTools.indexOf(tool)
      newLastClickedTools.splice(index, 1)
      newLastClickedTools.unshift(tool)
    }

    setLastClickedTools(newLastClickedTools)
  }

  function handleClickOnCard(tool: ITools) {
    setClickedTool(tool)
    organizeLastClickedTools(tool)  
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  return (
    <Wrapper>
      {showModal &&
      <ModalComponent tool={clickedTool} lastTools={lastClickedTools} closeModal={handleCloseModal}/>
      }
      <div className="container">
        <SearchBar setToBeSearched={setToBeSearched}/>
        <CardsContainer>
          {currentTools.map(tool => {
            return <Card key={tool.app_id} tool={tool} cardClick={handleClickOnCard} />
          })}
        </CardsContainer>
        <Paginator pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </Wrapper>
  )
}