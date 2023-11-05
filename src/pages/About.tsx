import { usePageState } from "../context/page-state-context";

export default function About() {
  const [, sendPageState] = usePageState();

  return (
    <>
      <div className="bg-red-600 h-full w-full">
        <h1 className="text-lime-600">About!</h1>
      </div>
      <button
        className="bg-teal-800"
        onClick={() => {
          sendPageState("OPEN_PROJECTS");
        }}
      >
        Projects
      </button>
    </>
  );
}
