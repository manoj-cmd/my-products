import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";
//import ThemeToggle from './components/ThemeToggle'


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-lightBg text-lightText transition-colors duration-300">
        <ThemeProvider>
            {/* <ThemeToggle /> */}
            <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
