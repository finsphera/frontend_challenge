import Sidebar from "@/components/Sidebar/Sidebar";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import '../styles/app.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className="layout_container">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}
