import { usePageState } from "../context/page-state-context";

export default function Header() {
  const [pageState, sendPageState] = usePageState();

  return (
    <nav className="flex flex-row justify-between mb-8">
      <div>
        <img
          src="/Flag_of_Hungary.png"
          alt="Flag of Hungary"
          className="w-8 h-8 rounded-full inline mr-4"
        ></img>
        <img
          src="/Flag_of_the_United_States.png"
          alt="Flag of the USA"
          className="w-8 h-8 rounded-full inline"
        ></img>
      </div>
      <div>
        <a
          href="#"
          className={`m-8 font-[500] text-[32px] ${
            pageState.matches("about")
              ? "text-[#26AD31]"
              : "text-[#0C381F] opacity-75"
          }`}
          onClick={() => {
            if (!pageState.matches("about")) {
              sendPageState("OPEN_ABOUT");
            }
          }}
        >
          About
        </a>
        <a
          href="#"
          onClick={() => {
            if (!pageState.matches("experience")) {
              sendPageState("OPEN_EXPERIENCE");
            }
          }}
          className={`m-8 font-[500] text-[32px] ${
            pageState.matches("experience")
              ? "text-[#26AD31]"
              : "text-[#0C381F] opacity-75"
          }`}
        >
          Experience
        </a>
        <a
          href="#"
          onClick={() => {
            if (!pageState.matches("projects")) {
              sendPageState("OPEN_PROJECTS");
            }
          }}
          className={`m-8 font-[500] text-[32px] ${
            pageState.matches("projects")
              ? "text-[#26AD31]"
              : "text-[#0C381F] opacity-75"
          }`}
        >
          Projects
        </a>
        <a
          href="#"
          onClick={() => {
            if (!pageState.matches("contact")) {
              sendPageState("OPEN_CONTACT");
            }
          }}
          className={`m-8 font-[500] text-[32px] ${
            pageState.matches("contact")
              ? "text-[#26AD31]"
              : "text-[#0C381F] opacity-75"
          }`}
        >
          Contact
        </a>
      </div>
      <div className={`inline opacity-75`}>
        {pageState.context.theme === "light" ? (
          <svg
            className={`w-8 h-8`}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
              stroke={"#0C381F"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        {/* <img
          src={`${
            pageState.context.theme === "light"
              ? "/moon-icon.svg"
              : "/sun-icon.svg"
          }`}
          alt="theme switcher"
          className={`w-8 h-8 rounded-full inline`}
        ></img> */}
      </div>
    </nav>
  );
}
