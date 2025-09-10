 import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";
import ThemeToggle from './components/ThemeToggle'


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          <ThemeProvider>
             <ThemeToggle /> 
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}





