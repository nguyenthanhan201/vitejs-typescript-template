import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function Page404() {
  const error: any = useRouteError();
  console.log("👌 ~ error", error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className='flex h-screen items-center justify-center bg-black'>
        <div id='error-page'>
          <h1 className='text-2xl font-bold text-white lg:text-6xl'>Oops!</h1>
          <p className='text-xl text-white'>Sorry, an unexpected error has occurred.</p>
          <p className='text-3xl text-white'>
            {error.status} {error.statusText}
          </p>
          <div className='mt-4'>
            <Link to='/' className='rounded-md bg-white px-5 py-2 hover:bg-gray-100'>
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // return <p>{error.message || "Unknown Error"}</p>;
  return (
    <div className='flex h-screen items-center justify-center bg-black'>
      <div id='error-page'>
        <h1 className='text-2xl font-bold text-white lg:text-6xl'>Oops!</h1>
        <p className='text-xl text-white'>Sorry, an unexpected error has occurred.</p>
        <p className='text-3xl text-white'>
          {error.statusText || error.message || "Unknown Error"}
        </p>
        <div className='mt-4'>
          <Link to='/' className='rounded-md bg-white px-5 py-2 hover:bg-gray-100'>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
