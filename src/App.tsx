import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  NavLink,
} from "react-router-dom";
import { Lunette, lunettes } from "./Lunette.ts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiShoppingCart } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AvatarLabel } from "./comp/AvatarLabel";
import { CardGlasse } from "./comp/CardGlasse";
import HomePage from "./comp/HomePage";
import { useState } from "react";

function App() {
  console.log(lunettes);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Root />
        </>
      ),
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "about-us",
          element: <div>About us</div>,
        },
        {
          path: "contact",
          element: <div>contacter</div>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

function Root() {
  return (
    <>
      <NavBarZara />
      <div>
        <Outlet />
      </div>
    </>
  );
}

function NavBarZara() {
  const [lunettes, setLunettes] = useState([]);
  const inputOnChange = () => {};
  return (
    <>
      <div className="flex items-center        justify-between gap-2  h-20 ">
        <NavLink to="/">
          <img
            className="   p-2   h-14"
            src="./src/assets/zaraLogo.png"
            alt=""
          />
        </NavLink>
        <nav className=" flex  items-center gap-2      me-80 justify-between w-80">
          <Button asChild variant="link" className=" text-lg">
            <NavLink to="/">Home</NavLink>
          </Button>
          <Button asChild variant="link" className=" text-lg">
            <NavLink to="/shop">Shop</NavLink>
          </Button>
          <Button asChild variant="link" className=" text-lg">
            <NavLink to="/about-us">About Us</NavLink>
          </Button>
          <Button asChild variant="link" className=" text-lg">
            <NavLink to="/contact">Contact</NavLink>
          </Button>
        </nav>
        <Input
          onChange={inputOnChange}
          placeholder="Rechercher"
          className="  hover:shadow-lg  border     border-slate-300   max-w-64     "
        />
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="border  border-slate-300 hover:shadow-lg"
                variant="secondary"
                size="icon"
              >
                <FiShoppingCart />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Panier vide...</SheetTitle>
                <SheetDescription>
                  Votre panier est vide, remplissez le par la paire de votre
                  choix.
                </SheetDescription>
                <Button variant="outline" className="border  border-slate-300">
                  Passer à l'achat
                </Button>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <AvatarLabel name="Jean" />
        </div>
      </div>
    </>
  );
}

function ShopPage() {
  return (
    <div className="flex    justify-center  border border-slate-300   w-full  gap-4  flex-wrap">
      {lunettes.map((lunette, index) => (
        <CardGlasse key={index} lunette={lunette} />
      ))}
    </div>
  );
}
