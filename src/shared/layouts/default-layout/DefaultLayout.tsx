import { Outlet, useLoaderData } from "react-router-dom";

const DefaultLayout = () => {
  const todos: any = useLoaderData();

  return (
    <div>
      <h1 className='ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md'>
        Default Layout
      </h1>
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
