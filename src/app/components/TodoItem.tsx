import { useMemo, useState } from "react";
import { patchTodoList } from "../apiCalls";
import { useTodoContext, type TodoItem as TodoItemType } from "../TodoProvider";
import { getIsOverdue } from "../utils/getIsOverdue";
import { getTodoBGColor } from "../utils/getTodoBGColor";

export default function TodoItem({ item }: { item: TodoItemType}) {
    const [isUpdating, setIsUpdating] = useState(false);
    const { id, description, isComplete, dueDate } = item;
    const { updateTodoData } = useTodoContext()
    const isOverdue = useMemo(() => getIsOverdue(dueDate), [dueDate]);
    const displayDate = useMemo(() => new Date(dueDate).toLocaleDateString(), [dueDate]);
    const backgroundColor = useMemo(() => getTodoBGColor(isComplete, isOverdue), [isComplete, isOverdue]);
    const setAsComplete = async () => {
        if (!isComplete) {
            setIsUpdating(true);
            const res = await patchTodoList(id, { isComplete: true });
            const parsedResponse = await res.json();
            if (parsedResponse.status === 'success') {
                updateTodoData!({...item, isComplete: true})
                setIsUpdating(false);
            }
        }
    }
    return (
        <div data-testid={`item-${id}`} className={`h-9.5 w-full min-w-72 max-w-[33.33%] mb-2 p-2 flex items-center justify-between ${backgroundColor}${isUpdating ? ' animate-pulse' : ''}`}>
            <div className="flex items-center">
                <input data-testid={`item-${id}-checkbox`} onChange={setAsComplete} className={`w-4 h-4 mx-1 accent-black${isComplete ? ' pointer-events-none' : ''}`} type="checkbox" checked={isComplete} />
                <p>{description}</p>
            </div>
            {dueDate && (
                <div className="border border-black px-1">
                    <p>{displayDate}</p>
                </div>
            )}
        </div>
    )
}