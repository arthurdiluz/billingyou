import { MdOutlineAttachMoney, MdPersonOutline } from "react-icons/md";
import { Card, PageTitle, Sidebar } from "../../../components";
import { SidebarLayout } from "../../../components/Layout";
import { CurrencyHelper } from "../../../helpers";

export function DashboardPage() {
  return (
    <SidebarLayout>
      <PageTitle title="Dashboard" />
      <div className="flex items-center justify-between gap-4">
        <Card
          Icon={<MdOutlineAttachMoney />}
          label="Profit"
          value={CurrencyHelper.NumberToCurrency(1200, "USD")}
        />
        <Card
          Icon={<MdOutlineAttachMoney />}
          label="Late"
          value={CurrencyHelper.NumberToCurrency(200, "USD")}
        />
        <Card Icon={<MdPersonOutline />} label="Customers" value={10} />
      </div>
    </SidebarLayout>
  );
}
