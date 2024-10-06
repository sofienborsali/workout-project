import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import {LayoutDashboard , Newspaper , Folder , CreditCard , Settings, User } from 'lucide-react'
import Link from "next/link";
const Sidebar= () => {
    
    return ( 
        <Command className="bg-secondary rounded-none">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <LayoutDashboard className="mr-2 h-4 w-4 "></LayoutDashboard>
        <Link href={'/dashboard'}>Dashboard</Link>
        </CommandItem>
        <CommandItem>
        <LayoutDashboard className="mr-2 h-4 w-4 "></LayoutDashboard>
        <Link href={'/dashboard'}>Workout Programe</Link>
        </CommandItem>
        <CommandItem>
        <LayoutDashboard className="mr-2 h-4 w-4 "></LayoutDashboard>
        <Link href={'/dashboard'}>Exercice</Link>
        </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
    <CommandItem>
        <User className="mr-2 h-4 w-4 "></User>
        <Link href={'/profile'}>Profile</Link>
        </CommandItem>
        <CommandItem>
        <Settings className="mr-2 h-4 w-4 "></Settings>
        <Link href={'/settings'}>Settings</Link>
        </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

    );
}
 
export default Sidebar ; 