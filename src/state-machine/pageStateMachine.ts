import { createMachine } from "xstate";

export type PageContext = {
  theme: string;
};

export type PageEvent = { type: "OPEN_PROJECTS" } | { type: "CANCEL" };

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
        OPEN_PROJECTS: {
          target: "projects",
        },
      },
    },
    projects: {},
  },
});

export { pageStateMachine };
