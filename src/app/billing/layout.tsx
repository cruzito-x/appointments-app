import Header from "@/components/header/Header";
import Items from "@/components/sidebar/Items";

export const metadata = {
  title: "Sanitos SV | Pago",
  description: "Vista de Facturación de Sanitos SV",
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Items />

      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
