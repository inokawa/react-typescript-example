import { Suspense, lazy } from "react";

export const withLazy = <T extends React.ComponentType<any>>(
  f: () => Promise<{ default: T }>
) => {
  const Component = lazy(f);
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<div>loading</div>}>
      <Component {...props} />
    </Suspense>
  );
};
