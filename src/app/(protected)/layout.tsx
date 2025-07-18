import { paths } from '$/config/paths';
import { auth } from '$/lib/auth/auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const ProtectedLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (!session) {
    redirect(paths.auth.login.getHref());
  }

  return <>{children}</>;
};

export default ProtectedLayout;
