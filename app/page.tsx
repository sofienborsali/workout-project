import Image from "next/image";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostTable from "@/components/posts/PostsTable";
export default function Home() {
  return (
    <>
    <div className="flex flex-col  gap-5 mb-5 md:flex-row">
    {/* this is comment */}
      <DashboardCard 
       
      titre="New Programme"/>
      <DashboardCard
      count={7} 
      titre="Workout Programe"
      />
      <DashboardCard 
      count={100} titre="exercices"/>
      
    </div>
    <PostTable title="Workout Programe"></PostTable>
   
    </>
  );
}
