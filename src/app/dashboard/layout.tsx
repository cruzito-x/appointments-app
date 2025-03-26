import Items from "@/components/sidebar/Items";

export const metadata = {
  title: "Sanitos SV | Dashboard",
  description: "Panel de control de Sanitos SV",
};

export default function DashboardLayout({
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
