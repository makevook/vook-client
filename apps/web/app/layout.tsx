import './globals.css';

import { Metadata } from 'next';

import StyledComponentsRegistry from '@/lib/registry';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='kr'>
      <body>
        <StyledComponentsRegistry>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
