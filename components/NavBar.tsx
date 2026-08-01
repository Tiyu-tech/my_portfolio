import Link from "next/link";
import { roboto } from "@/app/layout";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
function NavBtn({ children }: { children: React.ReactNode }) {
  return (
    <Button className={"bg-transparent backdrop-blur-3xl"}>{children}</Button>
  );
}
function NavBar() {
  return (
    <NavigationMenu
      className={` ${roboto.className}  bg-transparent backdrop-blur-3xl fixed top-0 right-0 z-100 min-w-dvw  flex justify-between`}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={"/"}>
            {" "}
            <NavBtn>Home</NavBtn>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"}>
            {" "}
            <NavBtn>Services</NavBtn>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"}>
            <NavBtn>About</NavBtn>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavBar;
