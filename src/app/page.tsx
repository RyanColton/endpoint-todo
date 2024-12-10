import { getTodoList } from "./apiCalls";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./TodoProvider";

export default async function Home() {
  let todoData = null
  try {
    const todoRes = await getTodoList()
    todoData = await todoRes.json();
  } catch(e) {
    // many ways to handle data fetching issues, just stubbing it out to throw an error UI for this example
    console.error(e);
    return <div>Error fetching todo data</div>
  }

  return (
    <TodoProvider data={todoData}>
      <Header />
      <TodoList />
    </TodoProvider>
  );
}
