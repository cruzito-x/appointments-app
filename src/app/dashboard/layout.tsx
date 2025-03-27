import Header from "@/components/header/Header";
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
      <div className="w-full sticky top-0">
        <Header />
        <div className="w-3/4">{children}</div>
      </div>
    </div>
  );
}
