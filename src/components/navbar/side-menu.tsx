import React from "react";
import { Separator } from "../ui/seperator";
import { Badge } from "../ui/badge";
import { MapPinIcon } from "lucide-react";

interface SideMenuProps {
  navmenu: string[];
  isMenuOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ navmenu, isMenuOpen }) => {
  return (
    <div
      className={`p-4 bg-white w-3/4 fixed inset-y-0 right-0 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <ul className="space-y-8 font-medium text-xl capitalize">
        {navmenu.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
      <Separator className="mt-10 mb-10" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="">
            <Badge variant={"outline"} className="border-black text-md">
              Sign in
            </Badge>
          </span>
          <span>
            <Badge className="text-md">Join now</Badge>
          </span>
        </div>
        <div className="flex justify-start items-center"> 
          <span className="flex gap-2">
            <MapPinIcon fill="balck" color="white" />
            <span className="font-semibold">Find a store</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
