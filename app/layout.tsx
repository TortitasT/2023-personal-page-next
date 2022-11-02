import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

import styles from "./layout.module.css";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Tortitas</title>
      </Head>

      <Header page={0}/>
      <body>{children}</body>
      <Footer/>
    </html>
  );
}
