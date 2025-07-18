import { PropsWithChildren } from 'react';

const ProtectedLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default ProtectedLayout;
