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
      className={`${roboto.className}
    fixed
    top-4
    left-1/2
    -translate-x-1/2
    z-50
    h-14
    bg-transparent
    backdrop-blur-3xl
    rounded-full
    min-w-100
    px-4
    flex
    justify-between
  `}
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
