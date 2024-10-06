import {Table,TableBody , TableRow , TableCell , TableHead , TableHeader , TableCaption} from "@/components/ui/table" ; 
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";

import { Key, ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode } from "react";
interface PostTableProps {
    Limit?: number ; 
    title?: string ; 


}

const PostTable = ({Limit , title} : PostTableProps) => {
    return ( 

        <div className="mt-10">
            <h3 className="h3 text-2xl mb-4 font-semibold">{title ? title : 'post'}</h3>
            <Table>
                <TableCaption>A List recent posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="hidden md:table-cell">Id</TableHead>
                        <TableHead className="hidden md:table-cell">Name</TableHead>
                        <TableHead className="hidden md:table-cell">date</TableHead>
                        <TableHead className="hidden md:table-cell">View</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((Post) => (
                    <TableRow key={Post.id}>
                        <TableCell className="hidden md:table-cell">{Post.id}</TableCell>
                        <TableCell>{Post.author}</TableCell>
                        <TableCell className=" hidden sm:table-cell">{Post.date}</TableCell>
                        <TableCell>
                            <Link  href={`/posts/edit/${Post.id}`}>
                            <button className=" bg-blue-500 hover:bg-blue-700 text-white rounded font-blod py-2 px-4 text-xs">edit</button></Link>
                        </TableCell>
                    </TableRow>
                    
                    ) )}
                </TableBody>
            </Table>
        </div>

     );
}
 
export default PostTable;