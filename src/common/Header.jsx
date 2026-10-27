import { Link } from "react-router";
import ContainerPz from "./layers/ContainerPz";
import ImagePz from "./layers/ImagePz";

const Header = () => {
  return (
    <nav className="fixed w-full top-0 z-20 bg-gray-600">
      <ContainerPz className="flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-600">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <ImagePz
            src={"https://flowbite.com/docs/images/logo.svg"}
            className="h-7"
          />
          <span className="self-center text-xl font-semibold text-white">
            Flowbite
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Cart 0
              </Link>
            </li>
          </ul>
        </div>
      </ContainerPz>
    </nav>
  );
};

export default Header;
