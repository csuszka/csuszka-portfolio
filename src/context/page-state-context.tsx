import { useActor, useInterpret } from "@xstate/react";
import React, { createContext, ReactNode } from "react";
import {
  BaseActionObject,
  Interpreter,
  ResolveTypegenMeta,
  ServiceMap,
  TypegenDisabled,
} from "xstate";
import {
  pageStateMachine,
  PageContext,
  PageEvent,
} from "../state-machine/pageStateMachine";

type ContextType = {
  pageState: Interpreter<
    PageContext,
    any,
    PageEvent,
    {
      value: any;
      context: PageContext;
    },
    ResolveTypegenMeta<TypegenDisabled, PageEvent, BaseActionObject, ServiceMap>
  > | null;
};

const PageStateContext = createContext<ContextType>({
  pageState: null,
});

function PageStateProvider(props: { children: ReactNode }) {
  const pageState = useInterpret(pageStateMachine, { devTools: true });
  return (
    <PageStateContext.Provider value={{ pageState: pageState }} {...props} />
  );
}

const usePageStateService = () => {
  const { pageState } = React.useContext(PageStateContext);
  if (!pageState) {
    throw new Error(
      "pageStatus is not defined you probably called this outside of the provider"
    );
  }
  return pageState;
};

const usePageState = () => {
  const { pageState } = React.useContext(PageStateContext);
  if (!pageState) {
    throw new Error(
      "pageStatus is not defined you probably called this outside of the provider"
    );
  }
  // as const will keep the types
  return [...useActor(pageState), pageState] as const;
};

export {
  PageStateProvider,
  usePageState,
  usePageStateService,
  PageStateContext,
};
