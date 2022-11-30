import './globals.css';
import Provider from  "./providers/provider"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body><Provider>{children}</Provider></body>
    </html>
  )
}
