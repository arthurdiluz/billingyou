import Card from "@components/Card/Card";
import Container from "@components/Container/Container";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import { CurrencyHelper } from "@helpers/CurrencyHelper";
import { DateHelper } from "@helpers/DateHelper";
import { IBillingDashboard } from "@interfaces/IBilling";
import { BillingService } from "@services/BillingService";
import { useEffect, useState } from "react";
import {
  MdOutlineAttachMoney,
  MdOutlineMoneyOff,
  MdOutlinePersonOutline,
} from "react-icons/md";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { HttpStatusCode } from "@enums/HttpStatusCode.enum";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<IBillingDashboard>();
  const [barData, setBarData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await BillingService.dashboard();

      if (status === HttpStatusCode.Ok) {
        setDashboard(data);

        const dates = data.history.map((history) => history.dueDate);
        const paids = dates.map(
          (date) =>
            data.history
              .filter(({ status }) => status === "PAID")
              .find(({ dueDate }) => dueDate === date)?.value || 0
        );
        const pendings = dates.map(
          (date) =>
            data.history
              .filter(({ status }) => status === "PENDING")
              .find(({ dueDate }) => dueDate === date)?.value || 0
        );

        setBarData({
          labels: dates.map((date) => DateHelper.fromIsoToUtc(date, "dd/MM")),
          datasets: [
            {
              label: "Income",
              data: paids,
              backgroundColor: "hsla(184, 99%, 38%, 0.5)",
            },
            {
              label: "Pending",
              data: pendings,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      }
    }

    fetchData();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle title="Dashboard" />
      {dashboard && (
        <div className="max-w-full lg:max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <Card
              Icon={<MdOutlineAttachMoney />}
              label="Profit"
              value={CurrencyHelper.NumberToCurrency(dashboard.paid, "USD")}
            />
            <Card
              Icon={<MdOutlineMoneyOff />}
              label="Late"
              value={CurrencyHelper.NumberToCurrency(dashboard.late, "USD")}
            />
            <Card
              Icon={<MdOutlineMoneyOff />}
              label="Pending"
              value={CurrencyHelper.NumberToCurrency(dashboard.pending, "USD")}
            />
            <Card
              Icon={<MdOutlinePersonOutline />}
              label="Clients"
              value={dashboard.customers}
            />
          </div>
          {barData && (
            <Container className="mt-4">
              <Bar options={barOptions} data={barData} />
            </Container>
          )}
        </div>
      )}
    </SidebarLayout>
  );
}
