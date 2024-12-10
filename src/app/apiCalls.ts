// GET
export const getTodoList = () => fetch('https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/get', {
    headers: {
      'X-API-KEY': process.env.TODO_API_KEY,
    }
});

// PUT
// stub, this would go here whenever we get to the point of adding new todo items
// export const putTodoItem () => {}

// PATCH
export const patchTodoList = (id: string, body) => fetch(`https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/patch/:${id}`, {
    headers: {
        'X-API-KEY': process.env.TODO_API_KEY,
    },
    body,
});

// DELETE
// not sure if we would just a hard or soft delete, potentially patch could still be used for this?