import { auth } from '$/lib/auth/auth';
import { signOutAction } from '$/lib/auth/auth.actions';

export const ProfilePageView = async () => {
  const session = await auth();
  return (
    <div>
      ProfilePageView {session?.user?.email}
      <form action={signOutAction}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};
