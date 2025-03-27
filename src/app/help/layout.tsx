import Items from "@/components/sidebar/Items";

export const metadata = {
  title: "Sanitos SV | Ayuda",
  description: "Centro de Ayuda de Sanitos SV",
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Items />
      <div className="p-3 w-full">{children}</div>
    </div>
  );
}
