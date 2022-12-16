import Card from "@components/Card/Card";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import { CurrencyHelper } from "@helpers/CurrencyHelper";
import { MdOutlineAttachMoney, MdPersonOutline } from "react-icons/md";

export default function DashboardPage() {
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
