"use client";
import React, { useState } from "react";

import {cn} from "@/app/utils/utils";
import {HoveredLink,Menu,MenuItem,ProductItem} from "@/app/ui/navbar-menu";
import Link from "next/link";

export function NavbarDemo({className}:{className?:string}) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",className)}>

          <Menu setActive={setActive}>
              <Link href={"#"}>
                  <MenuItem setActive={setActive} active={active} item={"Home"}>

                  </MenuItem>
              </Link>
              <MenuItem setActive={setActive} active={active} item={"Our Products"}>
                  <div className="flex flex-col space-y-4 text-sm">
                      <HoveredLink href={"/glassware"}>Glassware</HoveredLink>
                      <HoveredLink href={"/appratus"}>Appratus</HoveredLink>
                      <HoveredLink href={"/models"}>Models</HoveredLink>

                  </div>
              </MenuItem>
              <Link href={"/contact"}>
                  <MenuItem setActive={setActive} active={active} item={"Contact us"}>

                  </MenuItem>
              </Link>
          </Menu>
        </div>
    );
}

