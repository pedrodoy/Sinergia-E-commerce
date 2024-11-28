'use client'

import { formatPrice } from "@/utils/formatPrice";
import { Order, User } from "@prisma/client";
import moment from "moment";
import { Product } from '@prisma/client'
import { DataGrid, GridColDef} from '@mui/x-data-grid'
import { useRouter } from "next/navigation";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdClose, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface OrdersClientProps{
    orders: ExtendedOrder[]
}

type ExtendedOrder = Order & {
    user: User
}

const OrderClient:React.FC<OrdersClientProps> = ({orders}) => {

    const router = useRouter()

    let rows: any = []

    if(orders){
        rows = orders.map((order) => {
            return {
                id: order.id,
                customer: order.user.name,
                amount: formatPrice(order.amount / 100),
                paymentStatus: order.status, 
                date: moment(order.createDate).fromNow(),
                deliveryStatus: order.deliveryStatus
            }
        })
    }

    const columns: GridColDef[] = [
        {field : 'id', headerName: 'ID', width : 220},
        {field : 'customer', headerName: 'Nome de usuário', width : 130},
        {field : 'amount', headerName: 'Valor(R$)', width: 130, renderCell: (params) => { 
            return (
                <div className="font-bold text-slate-800">{params.row.amount}</div>
            )
        }},
        {field : 'paymentStatus', headerName: "Status do pagamento", width:130, renderCell: (params) => {
            return ( 
                <div>{params.row.paymentStatus === 'pendente' ? (
                    <Status
                    text ="pendente"
                    icon= {MdAccessTimeFilled}
                    bg="bg-slate-200"
                    color="text-slate-700"/>
                ) : params.row.paymentStatus === 'completo' ?(
                    <Status
                    text ="completo"
                    icon= {MdDone}
                    bg="bg-green-200"
                    color="text-green-700"
                    />
                    
                )
                :(

                    <></>)}</div> 
                )
        }},
        {field : 'deliveryStatus', headerName: "Status da entrega", width:130, renderCell: (params) => {
            return ( 
                <div>{params.row.deliveryStatus === 'pendente' ? (
                    <Status
                    text ="pendente"
                    icon= {MdAccessTimeFilled}
                    bg="bg-slate-200"
                    color="text-slate-700"/>
                ) : params.row.deliveryStatus === 'despachado' ?(
                    <Status
                    text ="despachado"
                    icon= {MdDeliveryDining}
                    bg="bg-purple-200"
                    color="text-purple-700"
                    />
                    
                ): params.row.deliveryStatus === 'entregue' ?(
                    <Status
                    text ="entregue"
                    icon= {MdDone}
                    bg="bg-green-200"
                    color="text-green-700"
                    />
                ): <></>}</div> 
            )
        }},
        {
            field: "date",
            headerName: "Data",
            width: 130
        },
        {
            field:"action",
            headerName:"Ações",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="flex justify-between gap-4 w-full mt-[10px]">
                        <ActionBtn icon={MdRemoveRedEye} onClick={() => {
                            router.push(`/order/${params.row.id}`)
                        }}/>
                    </div>
                    
                )
            }
        }

    ]

    return ( 
        <div className="max-w-[1150px] m-auto text-xl">
            <div className="mb-4 mt-8">
                <h1 className=" flex font-bold text-2xl justify-center ">Seus pedidos</h1>
            </div>
            <div style={{height: 600, width:"100%"}}>
                <DataGrid rows={rows} columns={columns} initialState={{pagination: {paginationModel: {page: 0, pageSize: 9}}, 
            }} pageSizeOptions={[9,20]} checkboxSelection disableRowSelectionOnClick/>
            </div>
        </div>
     );
}
 
export default OrderClient;