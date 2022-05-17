import Modal from '@/components/Modal/ModalComponent'
import { ITools } from '@/types/tools'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Modal Component', () => {
  const toolInfo: ITools = {
    app_id:	"omie",
    name:	"Omie",
    color:	"#001E27",
    icon:	"https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
    link:	"https://pluga.co/ferramentas/omie/"
  }

  const lastTools: ITools[] = [
    {
      app_id:	"hotmart",
      name:	"Hotmart",
      color:	"#F04E23",
      icon:	"https://assets.pluga.co/apps/icons/hotmart/hotmart-icon.svg",
      link:	"https://pluga.co/ferramentas/hotmart/"
    },
    {
      app_id:	"omie",
      name:	"Omie",
      color:	"#001E27",
      icon:	"https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
      link:	"https://pluga.co/ferramentas/omie/"
    },
    {
      app_id:	"eduzz",
      name:	"Eduzz",
      color:	"#FFCD33",
      icon:	"https://assets.pluga.co/apps/icons/eduzz/eduzz-icon.svg",
      link:	"https://pluga.co/ferramentas/eduzz/",
    },
    {
      app_id:	"jira",
      name:	"Jira Software",
      color:	"#0052cc",
      icon:	"https://assets.pluga.co/apps/icons/jira/jira-icon.svg",
      link:	"https://pluga.co/ferramentas/jira/"
    },
  ]

  const mockCloseModal = jest.fn()

  it('should render correctly', () => {
    render(
      <Modal tool={toolInfo} lastTools={lastTools} closeModal={mockCloseModal} />
    )

    expect(screen.getByText(toolInfo.name)).toBeInTheDocument()
  })

  it('should render last three tools accessed', () => {
    render(
      <Modal tool={toolInfo} lastTools={lastTools} closeModal={mockCloseModal}/>
    )
    
    const lastThreeTools = screen.getAllByTestId('last-tools--item')

    expect(lastThreeTools.length === 3).toBeTruthy()
  })

  it('should not render the current tool at last accessed tools', () => {
    render(
      <Modal tool={toolInfo} lastTools={lastTools} closeModal={mockCloseModal}/>
    )

    const toolName = screen.getAllByText(toolInfo.name)

    expect(toolName[1]).toBeFalsy()
  })

  it('should call closeModal function on click in close button', async () => {
    render(
      <Modal tool={toolInfo} lastTools={lastTools} closeModal={mockCloseModal}/>
    )

    const closeButton = screen.getByTestId('close-button')
    const overlay = screen.getByTestId('overlay')

    await userEvent.click(closeButton)
    await userEvent.click(overlay)

    expect(mockCloseModal).toHaveBeenCalledTimes(2)
  })
})