import Button from "@components/Button/Button";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import Table from "@components/Table/Table";
import { Link } from "react-router-dom";

export default function BillingsPage() {
  return (
    <SidebarLayout>
      <PageTitle
        title="Billings"
        buttons={[
          <Link to="/billing/create">
            <Button>Add billing</Button>
          </Link>,
          <Link to="/billing/update">
            <Button variant="link">Options</Button>
          </Link>,
        ]}
      />
      <Table
        headers={[
          { key: "description", label: "Description" },
          { key: "status", label: "Status" },
          { key: "value", label: "Valor" },
          { key: "dueDate", label: "Due date" },
          { key: "customer", label: "Customer" },
        ]}
        data={[]} // TODO: make the query
      />
    </SidebarLayout>
  );
}
