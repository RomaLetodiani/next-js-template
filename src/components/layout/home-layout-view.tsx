import { PropsWithChildren } from 'react';

export const HomeLayoutView = ({ children }: PropsWithChildren) => (
  <div className="container mx-auto">{children}</div>
);
