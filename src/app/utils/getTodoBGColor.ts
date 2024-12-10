export const getTodoBGColor = (isComplete: boolean, isOverdue: boolean) => {
    let backgroundColor = "bg-todo-base";
    if (isOverdue) {
        backgroundColor = "bg-todo-overdue";
    }
    if (isComplete) {
        backgroundColor = "bg-todo-complete";
    }
    return backgroundColor;
}