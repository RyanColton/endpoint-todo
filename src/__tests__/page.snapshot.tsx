import { render } from '@testing-library/react'
import Page from '../app/page'

jest.mock('../app/apiCalls', () => ({
  getTodoList: jest.fn().mockResolvedValue({ json: () => ({
    description: "Run LA marathon",
    dueDate: "2023-03-21T13:30:00.000Z",
    id: "6",
    isComplete: false,
  }) }),
}));
 
it('renders basic layout of todo app with mocked data', async () => {
  const { container } = await render(<Page />)
  expect(container).toMatchSnapshot()
})