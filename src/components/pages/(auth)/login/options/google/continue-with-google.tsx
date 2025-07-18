import { Button } from '$/components/ui/button';
import { loginWithGoogle } from '$/lib/auth/auth.actions';

export const ContinueWithGoogle = () => (
  <form action={loginWithGoogle}>
    <Button type="submit">Continue with Google</Button>
  </form>
);
