import { Toaster } from '$/components/ui/sonner';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './theme.provider';

export const Providers = async ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    {children}
    <Toaster />
  </ThemeProvider>
);
