import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@components/Button/Button";
import Container from "@components/Container/Container";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import Table from "@components/Table/Table";
import ICustomer from "@interfaces/ICustomer";
import { CustomerService } from "@services/CustomerService";
import { HttpStatusCode } from "@enums/HttpStatusCode.enum";

export default function CustomersPage() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  function handleTableClick({ id }: any) {
    navigate(`/customers/update/${id}`);
  }

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await CustomerService.find();

      if (status === HttpStatusCode.Ok) {
        setCustomers(data);
      }
    }

    fetchData();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle
        title="Customers"
        buttons={[
          <Link to="/customer/create">
            <Button size="small">Add customer</Button>
          </Link>,
        ]}
      />
      <Container className="p-10">
        <Table
          onClick={handleTableClick}
          headers={[
            { key: "name", label: "Name" },
            { key: "email", label: "E-mail", width: 200 },
            { key: "phone", label: "Phone number", width: 200 },
          ]}
          data={customers}
        />
      </Container>
    </SidebarLayout>
  );
}
