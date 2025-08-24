import type { ComponentType, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export function composeProviders(...providers: ComponentType<ProviderProps>[]) {
  return ({ children }: ProviderProps) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
}
