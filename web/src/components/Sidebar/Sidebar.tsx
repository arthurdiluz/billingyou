import {
  MdPieChartOutline,
  MdOutlineAttachMoney,
  MdPersonOutline,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-[350px] h-full bg-white shadow-lg flex flex-col items-center justify-start p-10">
      {/* <Link to="/">
        <Logo width={200} />
      </Link> */}
      <div className="w-full my-5 flex flex-col gap-1">
        <Link to="/">
          <SidebarItem>
            <MdPieChartOutline fontSize="24px" />
            Dashboard
          </SidebarItem>
        </Link>
        <Link to="/charges">
          <SidebarItem>
            <MdOutlineAttachMoney fontSize="24px" />
            Charges
          </SidebarItem>
        </Link>
        <Link to="/customers">
          <SidebarItem>
            <MdPersonOutline fontSize="24px" />
            Customers
          </SidebarItem>
        </Link>
        <Link to="/about">
          <SidebarItem>
            <MdOutlineSupervisorAccount fontSize="24px" />
            About
          </SidebarItem>
        </Link>
      </div>
    </aside>
  );
}
