import { Link } from "react-router-dom";
import { Button, PageTitle, Table } from "../../../components";
import { SidebarLayout } from "../../../components/Layout";

export function CustomersPage() {
  return (
    <SidebarLayout>
      <PageTitle
        title="Customers"
        buttons={[
          <Link to="/customers/create">
            <Button>Add customer</Button>
          </Link>,
          <Link to="/customers/update">
            <Button variant="link">Options</Button>
          </Link>,
        ]}
      />
      <Table
        headers={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
        ]}
        data={[]} // TODO: make the query
      />
    </SidebarLayout>
  );
}
