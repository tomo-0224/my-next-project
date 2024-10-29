import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
