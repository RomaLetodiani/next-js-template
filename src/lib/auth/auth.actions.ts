'use server';

import { paths } from '$/config/paths';
import { signIn, signOut } from '$/lib/auth/auth';

export const signOutAction = async () => signOut();

export const loginWithGoogle = async () =>
  await signIn('google', { redirectTo: paths.home.getHref() });
