import { createMachine, sendParent } from "xstate";

export type PageContext = {
  theme: string;
};

export type PageEvent = { type: "CANCEL" };

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
        CANCEL: {
          actions: sendParent("FINISH_CHECKOUT"),
        },
      },
    },
  },
});

export { pageStateMachine };
