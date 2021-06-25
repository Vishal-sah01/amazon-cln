import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn , signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

function Header() {
 const [session] = useSession();
 const router = useRouter();

    return (
        <header>
            {/* top nav*/}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
               <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                 <Image 
                 onClick={()=> router.push("/")}
                   src="http://links.papareact.com/f90"
                   width={150}
                   height={40}
                   objectFit="contain"
                   className="cursor-pointer"
                 />
               </div>

               {/* search bar*/}
               <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                   <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                   <SearchIcon className="h-12 p-4"/>
               </div>

               {/*Right */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
               <div onClick={!session ? signIn : signOut} className="link">
                   <p className="hover:underline">
                       {session ? `Hello, ${session.user.name}`: "Sign In"}
                   </p>
                   <p className="font-extrabold md:text-sm">Accounts & Lists</p>
               </div>

               <div className="link">
                   <p>Returns</p>
                   <p className="font-extrabold  md:text-sm mt-2">& Orders</p>
               </div>

               <div 
               onClick={()=> router.push("/checkout")} 
               className="relative link flex items-center cursor-pointer link">

                   <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                   <ShoppingCartIcon className="h-10"/>
                   <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
               </div>
            </div>
        </div>

            {/* bottom nav*/}
            <div className="flex item-center space-x-3 bg-amazon_blue-light text-white text-sm">
                <p className="link flex item-center">
                    <MenuIcon className="h-6 mr-1"/>
                    ALL
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Buisness</p>
                <p className="link">Today's Deal</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Prime Day</p>
                <p className="link hidden lg:inline-flex">Amazon big sales</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Personal Care</p>
            </div>
        </header>
    );
}

export default Header;
