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
      <div className="w-3/5">{children}</div>
    </div>
  );
}
