import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {

  //const [session] = useSession();

  const { data: session } = useSession();
  const router = useRouter();
  // step 3 getting items from basketslice
  const items = useSelector(selectItems);
  
  return (
    <header>
        {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push('/')}

            //src="https://links.papareact.com/f90"
            src="https://www.pngitem.com/pimgs/m/195-1951454_your-logo-here-png-transparent-png.png"
            width={150}
            height={40}
            objectFit="contain" //keep the aspect ratio, resized itself
            className="cursor-pointer" //change our coursor when we cover it

          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 " type="text" />
          <SearchIcon className="h-12 p-4" />

        </div>
        {/* Right */}
        <div className="text-black flex items-center test-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
            <p className="hover:underline">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div
            onClick={() => router.push("/orders")}
            className="cursor-pointer link"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div 
            onClick={() => router.push("/checkout")}
            className="relative link flex cursor-pointer items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w--4 bg-yellow-400 text-center rounded-full test-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>

        </div>
      </div>
        {/* Bottom nav */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-black text-sm">
          <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1"/>
            All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Prime Video</p>
          <p className="link">Prime Video</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>
    </header>
  );
}

export default Header;
