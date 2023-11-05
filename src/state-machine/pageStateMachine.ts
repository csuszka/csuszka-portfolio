import { createMachine } from "xstate";

export type PageContext = {
  theme: "light" | "dark";
};

export type PageEvent =
  | { type: "OPEN_ABOUT" }
  | { type: "OPEN_CONTACT" }
  | { type: "OPEN_EXPERIENCE" }
  | { type: "OPEN_PROJECTS" }
  | { type: "CANCEL" };

const pageDefaultState: PageContext = {
  theme: "light",
};

const pageStateMachine = createMachine<PageContext, PageEvent>({
  id: "pageState",
  initial: "about",
  predictableActionArguments: true,
  context: { ...pageDefaultState },
  states: {
    about: {
      on: {
        OPEN_ABOUT: { target: "about" },
        OPEN_CONTACT: { target: "contact" },
        OPEN_EXPERIENCE: { target: "experience" },
        OPEN_PROJECTS: {
          target: "projects",
        },
      },
    },
    contact: {
      on: {
        OPEN_ABOUT: { target: "about" },
        OPEN_CONTACT: { target: "contact" },
        OPEN_EXPERIENCE: { target: "experience" },
        OPEN_PROJECTS: {
          target: "projects",
        },
      },
    },
    experience: {
      on: {
        OPEN_ABOUT: { target: "about" },
        OPEN_CONTACT: { target: "contact" },
        OPEN_EXPERIENCE: { target: "experience" },
        OPEN_PROJECTS: {
          target: "projects",
        },
      },
    },
    projects: {
      on: {
        OPEN_ABOUT: { target: "about" },
        OPEN_CONTACT: { target: "contact" },
        OPEN_EXPERIENCE: { target: "experience" },
        OPEN_PROJECTS: {
          target: "projects",
        },
      },
    },
  },
});

export { pageStateMachine };
