import Sidebar from "@/components/Sidebar/Sidebar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className="layout_container">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}
