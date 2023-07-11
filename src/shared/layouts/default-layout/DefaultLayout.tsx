import { Outlet, useLoaderData } from "react-router-dom";

const DefaultLayout = () => {
  const todos: any = useLoaderData();

  return (
    <div>
      <h1 className='pt-2 p-4'>Default Layout</h1>
      <h3>todos</h3>
      <ul>
        {todos.todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
