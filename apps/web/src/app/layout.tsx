import '@/styles/reset.css'
import '@vook-client/design-system/style.css'

import { Metadata } from 'next'

import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { pretendard } from '@/styles/fonts'
import { MSWComponent } from '@/mock/MSWComponent'
import { ToastContextProvider } from '@/hooks/useToast'

import { ModalContextProvider } from 'src/hooks/useModal/useModal'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const inner = (
    <ReactQueryProvider>
      <ModalContextProvider>
        <ToastContextProvider>
          <div>{children}</div>
          <div id="modal" />
        </ToastContextProvider>
      </ModalContextProvider>
    </ReactQueryProvider>
  )

  return (
    <html lang="kr">
      <body className={pretendard.className}>
        {process.env.NEXT_PUBLIC_MSW === 'enable' ? (
          <MSWComponent>{inner}</MSWComponent>
        ) : (
          inner
        )}
      </body>
    </html>
  )
}

export default RootLayout
