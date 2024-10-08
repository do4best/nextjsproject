"use client";
import React, { useState } from "react";

import {cn} from "@/app/utils/utils";
import {HoveredLink,Menu,MenuItem,ProductItem} from "@/app/ui/navbar-menu";
import Link from "next/link";

export function NavbarDemo() {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="relative w-full flex items-center justify-center">

          <Menu setActive={setActive}>
              <Link href={"#"}>
                  <MenuItem setActive={setActive} active={active} item={"Home"}>

                  </MenuItem>
              </Link>
              <MenuItem setActive={setActive} active={active} item={"Products"}></MenuItem>
          </Menu>
        </div>
    );
}

