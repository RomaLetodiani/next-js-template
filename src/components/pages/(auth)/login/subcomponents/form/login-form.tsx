import { Card, CardContent, CardHeader, CardTitle } from '$/components/ui/card';
import { ContinueWithGoogle } from '../../options/google/continue-with-google';

export const LoginForm = () => (
  <Card>
    <CardHeader>
      <CardTitle>Login to your account</CardTitle>
    </CardHeader>
    <CardContent>
      <ContinueWithGoogle />
    </CardContent>
  </Card>
);
