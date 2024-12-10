"use client"
import { createContext, useContext } from 'react'

export type TodoItem = {
    id: string;
    description: string;
    isComplete: boolean;
    // It would be better have better type safety around the due date, possibly bringing in a library
    // with better date types. I didnt want to bloat this repository too much, so im sticking to string for this excersize 
    dueDate: string;
}

type TodoProviderProps = {
    children?: React.ReactNode;
    value: TodoItem[] | null;
}

const TodoContext = createContext<TodoItem[] | null>(null);

export function TodoProvider({ children, value } : TodoProviderProps) {
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext);
