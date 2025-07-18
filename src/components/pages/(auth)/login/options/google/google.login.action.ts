'use server';

import { paths } from '$/config/paths';
import { signIn } from '$/lib/auth/auth';

export const loginWithGoogle = async () =>
  await signIn('google', { redirectTo: paths.home.getHref() });
