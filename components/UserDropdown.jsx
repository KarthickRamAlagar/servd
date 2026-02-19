"use client";

import { UserButton } from "@clerk/nextjs";
import { Cookie, Refrigerator } from "lucide-react";

const UserDropdown = () => {
  return (
    <UserButton>
      <UserButton.MenuItems>
        {/* Show only on mobile (< md) */}
        <UserButton.Link
          label="My Recipes"
          href="/recipes"
          labelIcon={<Cookie size={16} />}
          className="md:hidden"
        />
        <UserButton.Link
          label="My Pantry"
          href="/pantry"
          labelIcon={<Refrigerator size={16} />}
          className="md:hidden"
        />

        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserDropdown;
