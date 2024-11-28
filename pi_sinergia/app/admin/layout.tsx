import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: 'Sinergia Admin',
    description: 'Sinergia Dashboard Admin'
}

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div>
            <AdminNav/>
            {children}
        </div>
     );
}
 
export default AdminLayout;