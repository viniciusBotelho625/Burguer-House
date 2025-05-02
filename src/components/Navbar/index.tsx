import { GiShoppingCart, GiFrenchFries } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { PiHamburger, PiBowlFood  } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";

import Link from "next/link";

 export function Navbar() {
  return (
    <header className="bg-white shadow-md mb-2">
      <nav className="container mx-auto flex items-center py-3 px-2 justify-between ">
        
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-red-500 flex items-center gap-1">
            <PiHamburger size={30} />
            BurgerHouse
          </Link>
        </div>
  
        
        <div className="flex">
          <ul className="flex gap-10 items-center">
            <li>
              <Link href="/burgers" className="flex items-center gap-1 text-gray-700 hover:text-red-500 transition">
                <PiHamburger size={20} />
                Burgers
              </Link>
            </li>
            <li>
              <Link href="/drinks" className="flex items-center gap-1 text-gray-700 hover:text-red-500 transition">
                <IoFastFoodOutline  size={20} />
                Combos
              </Link>
            </li>
            <li>
              <Link href="/burgers" className="flex items-center gap-1 text-gray-700 hover:text-red-500 transition">
                <PiBowlFood size={20} />
                Desserts
              </Link>
            </li>
            <li>
              <Link href="/drinks" className="flex items-center gap-1 text-gray-700 hover:text-red-500 transition">
                <RiDrinks2Line size={20} />
                Drinks
              </Link>
            </li>
          </ul>
        </div>
  
       
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-white bg-red-500 py-2 px-6 rounded-2xl transition cursor-pointer">
            <GiShoppingCart size={20} />
            Cart
          </button>  
        </div>
      </nav>
    </header>
  );
}