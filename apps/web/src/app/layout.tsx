import '@/styles/reset.css'
import '@vook-client/design-system/style.css'

import { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { pretendard } from '@/styles/fonts'
import { MSWComponent } from '@/mock/MSWComponent'
import { ToastContextProvider } from '@/hooks/useToast'
import { InitialSetting } from '@/components/InitialSetting'

import { ModalContextProvider } from 'src/hooks/useModal/useModal'

export const metadata: Metadata = {
  title: 'Vook',
  description: 'IT 용어를 가장 쉽고 빠르게 찾는 방법',
  icons: { icon: '/icon.svg' },
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
          <InitialSetting />
          <div>{children}</div>
          <div id="modal" />
        </ToastContextProvider>
      </ModalContextProvider>
    </ReactQueryProvider>
  )

  return (
    <html lang="kr">
      <head>
        <meta
          httpEquiv="Cross-Origin-Opener-Policy"
          content="same-origin-allow-popups"
        />
      </head>
      <body className={pretendard.className}>
        {process.env.NEXT_PUBLIC_MSW === 'enable' ? (
          <MSWComponent>{inner}</MSWComponent>
        ) : (
          inner
        )}
      </body>
      <GoogleAnalytics gaId="G-6QKD5PVE6E" />
    </html>
  )
}

export default RootLayout
