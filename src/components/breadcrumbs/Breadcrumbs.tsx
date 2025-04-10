import Link from "next/link";

const Breadcrumbs = ({
  icon = <></>,
  home = "",
  first_title = "",
  first_title_link = "",
  second_title = "",
  second_title_link = "",
  third_title = "",
}) => {
  return (
    <>
      <nav className="flex ps-3.5 pt-4 pb-2" aria-label="Breadcrumb">
        <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              {icon}
              {home}
            </a>
          </li>
          {first_title && (
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href={first_title_link}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-700"
                >
                  {first_title}
                </Link>
              </div>
            </li>
          )}
          {second_title && (
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href={second_title_link}
                  className="ms-1 text-sm font-medium text-gray-500 md:ms-2 hover:text-blue-500"
                >
                  {second_title}
                </Link>
              </div>
            </li>
          )}
          {third_title && (
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 hover:text-blue-500">
                  {third_title}
                </span>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Breadcrumbs;
