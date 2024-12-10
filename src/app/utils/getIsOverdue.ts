export const getIsOverdue = (dueDate: string) => {
    if (!dueDate) {
        return false;
    }
    const now = new Date().toISOString();
    return now > dueDate;
}