"use client"
import { createContext, useContext, useState } from 'react'

export type TodoItem = {
    id: string;
    description: string;
    isComplete: boolean;
    // It would be better have better type safety around the due date, possibly bringing in a library
    // with better date types. I didnt want to bloat this repository too much, so im sticking to string for this excersize 
    dueDate: string;
}

type TodoContext = {
    todoData?: TodoItem[] | null;
    updateTodoData: (data: TodoItem) => void;
}

type TodoProviderProps = {
    children: React.ReactNode;
    data: TodoItem[];
}

const TodoContext = createContext<Partial<TodoContext>>({});

export function TodoProvider({ children, data } : TodoProviderProps) {
    const [todoData, setTodoData] = useState(data || []);
    //
    const updateTodoData = (newTodoItem: TodoItem) => {
        if (!todoData.find((todo) => todo.id === newTodoItem.id)) {
            setTodoData((prevTodos) => [...prevTodos, newTodoItem]);
            return
        }
        setTodoData((prevTodos) => prevTodos.map((todo) => {
            if (todo.id === newTodoItem.id) {
                return { ...todo, ...newTodoItem }
            }
            return todo;
        }));
    };
    return (
        <TodoContext.Provider value={{ todoData, updateTodoData }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext);
