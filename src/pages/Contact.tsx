import { usePageState } from "../context/page-state-context";

export default function Contact() {
  const [pageState] = usePageState();

  return (
    <>
      <div className={`bg-[#0C0C0C] h-full w-full`}>
        <div
          className={`${
            pageState.context.theme === "light" ? "bg-white" : ""
          } h-full max-w-7xl`}
        >
          <h1 className="text-lime-600">Contact!</h1>
        </div>
      </div>
    </>
  );
}
