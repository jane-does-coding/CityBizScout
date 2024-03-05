"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed w-full bg-white z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            {currentUser?.name}
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
