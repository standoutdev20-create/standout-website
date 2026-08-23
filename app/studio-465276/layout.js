export const metadata = {
  title: 'Admin — StandoutDev',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({ children }) {
  return <>{children}</>
}
