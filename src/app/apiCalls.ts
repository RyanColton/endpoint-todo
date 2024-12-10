// GET
export const getTodoList = () => {
    const options: object = {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.TODO_API_KEY,
          
        }
    }
    return fetch('https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/get', options)
};

// PUT
// stub, this would go here whenever we get to the point of adding new todo items

// PATCH
export const patchTodoList = (id: string, body: object) => {
    const options: object = {
        method:'PATCH',
        headers: {
            'X-API-KEY': process.env.NEXT_PUBLIC_TODO_API_KEY,
        },
        body,
    }
    console.log(options);
    return fetch(`https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/patch/${id}`, options)
};

// DELETE
// not sure if we would just a hard or soft delete, potentially patch could still be used for this?