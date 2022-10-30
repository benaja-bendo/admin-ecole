import { UserIcon } from "../../icons/UserIcon";
import { BellIcon } from "../../icons/BellIcon";
import ButtonLogout from "../ButtonLogout";
import { UserModel } from "../../models/UserModel";
import { EcoleModel } from "../../models/EcoleModel";
import { useSelector } from "react-redux";
import { HamburgerSidebarIcon } from "../../icons/HamburgerSidebarIcon";
import { StoriesIcon } from "../../icons/StoriesIcon";
import {SchoolIcon} from "../../icons/SchoolIcon";

export default function Header({
  slide,
  setSlide,
}: {
  slide: boolean;
  setSlide: (slide: boolean) => void;
}) {
  const ecole = useSelector((state: any) => state.ecole as EcoleModel);
  const handleToggle = () => {
    console.log("toggle");

    setSlide(!slide);
  };
  return (
    <div>
      <div className="text-gray-50 bg-blue-600 shadow flex gap-0.5 h-14 w-full z-10">
        <div className="min-w-min px-4 h-full flex items-center justify-center">
          <div className="hidden md:flex items-center justify-center px-2 py-1 rounded-md border-2 text-sm text-gray-200">
            <SchoolIcon />
            <span className="pl-1">{ecole && ecole?.name}</span>
          </div>
          <button className="block md:hidden px-2 py-1 rounded-md border-2" onClick={handleToggle}>
            <HamburgerSidebarIcon />
          </button>
        </div>
        <div className="flex-1 flex justify-between items-center">
          <div className="sm:ml-2 bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button
              className="outline-none focus:outline-none"
            >
              <svg
                className="w-5 text-gray-600 h-5 cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                ></path>
              </svg>
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="recherche ..."
              className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center">
            <button>
              <BellIcon className="text-sm text-gray-200 hover:text-blue-900" />
            </button>
            <ButtonLogout />
            {/*<Button className="text-sm hover:text-blue-900">Déconexion</Button>*/}
          </div>
        </div>
      </div>
      {/*<HeaderMobile/>*/}
      {/* <Header/> */}
    </div>
  );
}
