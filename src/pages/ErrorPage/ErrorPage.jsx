import { Link } from "react-router-dom";
import { TbHomeMove } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <main className="w-full h-[94%] flex flex-col justify-center items-center bg-slate-900">
      <h1 className="text-9xl font-bold text-white">404</h1>
      <div className="bg-red-500 px-2 text-2xl rounded text-black">
        Page Not Found
      </div>
      <button className="mt-5">
        <section className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring">
          <span className="block px-5 py-3 bg-slate-900 border border-current">
            <Link to="/">
              <TbHomeMove className="text-5xl" />
            </Link>
          </span>
        </section>
      </button>
    </main>
  );
};

export default ErrorPage;
