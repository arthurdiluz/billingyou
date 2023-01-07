import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@components/Button/Button";
import Container from "@components/Container/Container";
import PageTitle from "@components/PageTitle/PageTitle";
import SidebarLayout from "@components/Layout/SidebarLayout";
import Table from "@components/Table/Table";
import { BillingService } from "@services/BillingService";
import { Billing } from "@shared/Billing";
import { IBilling } from "@interfaces/IBilling";
import { HttpStatusCode } from "@enums/HttpStatusCode.enum";

type IBillingTable = IBilling & { customerName: string };

export default function BillingsPage() {
  const navigate = useNavigate();
  const [billings, setBillings] = useState<IBillingTable[]>([]);

  function handleTableClick({ id }: any) {
    navigate(`/billing/update/${id}`);
  }

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await BillingService.find();

      if (status === HttpStatusCode.Ok) {
        setBillings(data.map(Billing.parsePayload));
      }
    }

    fetchData();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle
        title="Billings"
        buttons={[
          <Link to="/billing/create">
            <Button>Add billing</Button>
          </Link>,
        ]}
      />
      <Container className="p-10">
        <Table
          onClick={handleTableClick}
          headers={[
            { key: "customerName", label: "Customer", width: 200 },
            { key: "description", label: "Description" },
            { key: "status", label: "Status", width: 100 },
            { key: "value", label: "Value", width: 150 },
            { key: "dueDate", label: "Due date", width: 200 },
          ]}
          data={billings}
        />
      </Container>
    </SidebarLayout>
  );
}
