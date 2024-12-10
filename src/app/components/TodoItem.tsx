import type { TodoItem } from "../TodoProvider";
import { getIsOverdue } from "../utils/getIsOverdue";
import { getTodoBGColor } from "../utils/getTodoBGColor";

export default function TodoItem({ description, isComplete, dueDate }: TodoItem) {
    const isOverdue = getIsOverdue(dueDate);
    const backgroundColor = getTodoBGColor(isComplete, isOverdue);
    return (
        <div className={`h-9.5 w-1/3 mb-2 ${backgroundColor}`}>
            <p>{description}</p>
        </div>
    )
}