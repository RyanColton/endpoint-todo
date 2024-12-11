import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import TodoItem from "../app/components/TodoItem";
import { TodoProvider } from "@/app/TodoProvider";

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ status: 'success' }),
    }),
  ) as jest.Mock;

describe('TodoItem', () => {
    it('renders standard todo list item', async () => {
        const todoItem = {
            description: "Run marathon",
            dueDate: "2025-03-21T13:30:00.000Z",
            id: "6",
            isComplete: false,
        }

        const user = userEvent.setup();
        const { findByTestId, findByRole, container  } = await render(
          <TodoProvider data={[]}>
            <TodoItem item={todoItem} />
          </TodoProvider>
        );
        let component = await findByTestId('item-6')
        expect(component).toBeTruthy();

        // Clicking checkbox will properly return simulated api call
        const checkbox = await findByRole('checkbox');
        await user.click(checkbox);
        expect(global.fetch).toHaveBeenCalled();
    })
});