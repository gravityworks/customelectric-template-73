import React from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-brand-blue shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cd04ddd6-3c8b-4889-a685-ebfc54862cca.png" 
              alt="Custom Electric" 
              className="h-10"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-brand-offwhite hover:text-brand-offwhite/80 text-base">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/commercial"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-blue/50 to-brand-blue p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Commercial Services
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Professional electrical services for businesses
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem to="/services/residential" title="Residential">
                        Complete electrical solutions for your home
                      </ListItem>
                      <ListItem to="/services/generator" title="Generator Backup Systems">
                        Never lose power with backup systems
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/about" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">About</Link>
            <Link to="/contact" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">Contact</Link>
            <Button variant="secondary" className="font-medium">
              Request Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-brand-offwhite">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex justify-center mb-8 mt-4">
                  <img 
                    src="/lovable-uploads/cd04ddd6-3c8b-4889-a685-ebfc54862cca.png" 
                    alt="Custom Electric" 
                    className="h-8"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium mb-1">Services</p>
                    <Link to="/services/commercial" className="block pl-4 py-1 text-sm">
                      Commercial
                    </Link>
                    <Link to="/services/residential" className="block pl-4 py-1 text-sm">
                      Residential
                    </Link>
                    <Link to="/services/generator" className="block pl-4 py-1 text-sm">
                      Generator Backup Systems
                    </Link>
                  </div>
                  <Link to="/about" className="text-lg">About</Link>
                  <Link to="/contact" className="text-lg">Contact</Link>
                  <Button className="w-full">Request Quote</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
