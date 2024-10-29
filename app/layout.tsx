import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:
      "「Next.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost3000",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
