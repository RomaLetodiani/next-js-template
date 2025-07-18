import { Button } from '$/components/ui/button';
import { loginWithGoogle } from './google.login.action';

export const ContinueWithGoogle = () => (
  <form action={loginWithGoogle}>
    <Button type="submit">Continue with Google</Button>
  </form>
);
