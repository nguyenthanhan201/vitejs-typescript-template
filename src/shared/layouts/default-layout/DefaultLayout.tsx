import { usePagination } from "@/shared/hooks";
import { Outlet, useLoaderData } from "react-router-dom";

const DefaultLayout = () => {
  const todos: any = useLoaderData();
  const pagination = usePagination({
    data: todos.todos,
    boundaries: 3,
  });
  console.log(pagination.range);

  return (
    <div>
      <h1>Default Layout 2</h1>
      <h1 className='ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md'>
        Default Layout
      </h1>
      <h3>todos</h3>
      <div className='flex'>
        {pagination.range.map((item: any, index: number) => {
          if (item === "dots") return <span key={index}>...</span>;
          return (
            <button
              key={index}
              onClick={() => {
                pagination.setPage(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
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
