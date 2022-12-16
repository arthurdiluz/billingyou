import Button from "@components/Button/Button";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import Table from "@components/Table/Table";
import { Link } from "react-router-dom";

export default function CustomersPage() {
  return (
    <SidebarLayout>
      <PageTitle
        title="Customers"
        buttons={[
          <Link to="/customer/create">
            <Button>Add customer</Button>
          </Link>,
          <Link to="/customer/update">
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
