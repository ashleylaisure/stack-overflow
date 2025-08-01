
import { SignOut } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { createClient } from "@/lib/supabase/server"
import Image from "next/image"

const UserBtn = async () => {
    const supabase = await createClient();
    const {data: { user }} = await supabase.auth.getUser();

    const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await SignOut();
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <Image 
                            src="/icons/account.svg" 
                            alt="Account icon" 
                            width={15} 
                            height={15}
                            className="invert-colors"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                            Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    </>
    )
}

export default UserBtn;
