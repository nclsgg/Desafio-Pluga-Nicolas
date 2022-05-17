import Card from '@/components/Card/CardComponent'
import { ITools } from '@/types/tools'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


describe('Card Component', () => {
  const toolInfo: ITools = {
    app_id:	"omie",
    name:	"Omie",
    color:	"#001E27",
    icon:	"https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
    link:	"https://pluga.co/ferramentas/omie/"
  }

  const mockClickCard = jest.fn();

  it('should render tool name and image', () => {
    render(<Card tool={toolInfo} cardClick={mockClickCard} />)

    const image = screen.getByRole('img');

    expect(screen.getByText(toolInfo.name)).toBeInTheDocument()
    expect(image).toHaveAttribute('src', toolInfo.icon)
  })

  it('should call clickCard function on click in card', async () => {
    render(<Card tool={toolInfo} cardClick={mockClickCard} />)

    const card = screen.getByTestId('card');

    await userEvent.click(card);

    expect(mockClickCard).toHaveBeenCalledTimes(1);
  })
})
