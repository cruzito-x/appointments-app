import Items from "@/components/sidebar/Items";

export const metadata = {
  title: "Sanitos SV | Doctores",
  description: "Vista de Doctores de Sanitos SV",
};

export default function DoctorsLayout({
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
