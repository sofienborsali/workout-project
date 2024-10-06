import { Card , CardContent } from "@/components/ui/card";
import { Newspaper , LucideIcon } from "lucide-react";


interface DashboardCardProps{
    count?:number;
    titre?:string ; 


}
const DashboardCard = ({titre,count} :DashboardCardProps ) => {
    return ( 
    <Card className="bg-slate-100 dark:bg-slate-800 p-5 pb-0">
        <CardContent>
            <h3 className="text-3xl text-center md:4 font-bold text-slate-500 dark:text-slate-200 ">
                {titre}
            </h3>
            <div className="flex gap-5 justify-center items-center opacity-">
                <Newspaper className="text-slate-500 " size={72}></Newspaper>
                <h3 className="text-5xl font-semibold text-slate-500 dark:text-stone-200">{count}</h3>
            </div>
        </CardContent>
        
    </Card>
    
    

);




}
 
export default DashboardCard;