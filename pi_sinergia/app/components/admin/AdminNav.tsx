'use client'

import Link from "next/link";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";
import ManageOrdersClient from "@/app/admin/manage-orders/ManageOrdersClient";

const AdminNav = () => {

    const pathname = usePathname()
    return ( 
        <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
            <Container>
                <div className="flex flex-row items-center justify-between: md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
                    <Link href='/admin'>
                        <AdminNavItem label="Resumo" icon={MdDashboard} selected={pathname === '/admin'}/>
                    </Link>
                    <Link href='/admin/manage-orders'>
                        <AdminNavItem label="Ver Pedidos" icon={MdFormatListBulleted} selected={pathname === '/admin/manage-orders'}/>
                    </Link>

                </div>
            </Container>
        </div>

     );
}
 
export default AdminNav;