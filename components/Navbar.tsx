import { Avatar , AvatarImage , AvatarFallback} from "@/components/ui/avatar";
import Link  from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const Navbar = () => {
    return ( <div className="bg-slate-700 text-white dark:bg-slate-700 py-2 px-5 flex justify-between">
        <div>Logo</div>
        
        <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
            <AvatarImage src="https://github.com/shadcn.png">

            </AvatarImage>
        </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href="/profile">profile</Link></DropdownMenuItem>
    
    <DropdownMenuItem><Link href="/auth">Logout</Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div> );
}
 
export default Navbar;