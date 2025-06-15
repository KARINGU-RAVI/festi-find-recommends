
import { Menu, Search, Heart, User } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";

const navLinks = [
  "Live shows",
  "Streams",
  "Movies",
  "Plays",
  "Events",
  "Sports",
  "Activities",
];

const Header = () => (
  <nav className="bg-white pt-4 pb-2 border-b border-custom-border">
    <div className="container mx-auto px-4 flex flex-col gap-2">
      {/* First Row: Logo, Categories, Search, Favorites, Sign In */}
      <div className="flex items-center justify-between gap-2">
        {/* Logo */}
        <span className="text-2xl font-bold text-custom-logo whitespace-nowrap">BookUsNow</span>

        {/* Categories Dropdown & Search */}
        <div className="flex-1 flex items-center gap-2 ml-4">
          {/* Categories */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center rounded-md border border-custom-border px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50 transition focus:outline-none">
                <Menu className="mr-2 h-5 w-5" />
                Categories
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 w-48">
              <DropdownMenuItem>Concerts</DropdownMenuItem>
              <DropdownMenuItem>Theater</DropdownMenuItem>
              <DropdownMenuItem>Sports</DropdownMenuItem>
              <DropdownMenuItem>Comedy</DropdownMenuItem>
              <DropdownMenuItem>More...</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="DJI phantom"
              className="w-full pl-3 pr-10 py-2 border border-custom-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/40 bg-gray-50"
              style={{ minWidth: "150px" }}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Favorites & Sign In */}
        <div className="flex items-center gap-3 ml-2">
          <button className="flex items-center text-custom-heading hover:text-custom-logo text-sm font-medium transition">
            <Heart className="mr-1.5 h-5 w-5" />
            Favorites
          </button>
          <button className="border border-custom-border px-4 py-1.5 rounded-md bg-white hover:bg-gray-100 text-sm font-medium text-custom-heading flex items-center gap-1.5 transition">
            <User className="h-5 w-5" />
            Sign In
          </button>
        </div>
      </div>

      {/* Second Row: Location and Nav Links */}
      <div className="flex items-center justify-between gap-2 pt-2 pb-1">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-custom-subtitle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-custom-logo text-custom-logo" viewBox="0 0 16 16"><path d="M8 0C5.243 0 3 2.243 3 5c0 3.353 4.115 9.37 4.289 9.622A1 1 0 0 0 8.993 15a.999.999 0 0 0 .707-.378C8.885 14.37 13 8.353 13 5c0-2.757-2.243-5-5-5zm0 13.284C6.406 11.185 4 7.605 4 5c0-2.206 1.794-4 4-4s4 1.794 4 4c0 2.605-2.406 6.185-4 8.284z"/><path d="M8 7.5A2.5 2.5 0 1 1 8 2.5a2.5 2.5 0 0 1 0 5zm0-4A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 8 3.5z"/></svg>
          <span>Mumbai, India</span>
          <span className="px-1">›</span>
        </div>
        {/* Nav Links */}
        <div className="flex items-center flex-wrap gap-3">
          {navLinks.map((link) => (
            <a
              href="#"
              key={link}
              className="text-sm font-medium text-custom-heading hover:text-custom-logo transition whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
