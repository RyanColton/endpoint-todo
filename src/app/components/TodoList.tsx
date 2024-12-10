"use client"
import { useMemo } from "react";
import { useTodoContext } from "../TodoProvider";
import TodoItem from "./TodoItem";
import SkeletonLoader from "./SkeletonLoader";

import type { TodoItem as TodoItemType } from "../TodoProvider";

export default function TodoList() {
    const value = useTodoContext();

    // There are more performant ways of handling the breakdown of the todo array into its parts
    // I went with what seems to be a more readable solution within the constraints of this application.
    // In an actual application, I would like to see much of this sorting done through the api, especially as
    // the todo list will grow in size. Allowing us to gate the dates we want to request the data from
    // and by predetermining sort order, we can greatly reduce stress on the client. 
    const completedItems: TodoItemType[] = useMemo(() => value?.filter((i) => i.isComplete).sort((a, b) => a?.dueDate?.localeCompare(b?.dueDate)) || [], [value]);
    const sortedList: TodoItemType[] = useMemo(() => value?.filter((i) => !i.isComplete).sort((a, b) => a?.dueDate?.localeCompare(b?.dueDate)) || [], [value]);
    const listToRender: TodoItemType[] = useMemo(() => ([] as TodoItemType[]).concat(sortedList).concat(completedItems), [sortedList, completedItems])
    
    return (
      <div className="flex flex-col justify-center items-center">
        {listToRender?.length ? (
          <>
            {listToRender?.map((props) => <TodoItem key={props.id} {...props} />)}
          </>
    ): <SkeletonLoader />}
      </div>
    );
}