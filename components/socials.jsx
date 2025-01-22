import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiGithubFill, RiTwitterXFill } from "@remixicon/react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MoonIcon } from "./Icons/MoonIcon";
import { SunIcon } from "./Icons/SunIcon";

export default function Socials() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="inline-flex flex-wrap gap-2">
      {/* Social Links */}
      <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href=""
          aria-label="Search"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "icon",
              className:
                "rounded-lg md:rounded-none shadow-none md:first:rounded-s-lg md:last:rounded-e-lg focus-visible:z-10",
            })
          )}
        >
          <Search />
        </Link>
      </div>

      <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href=""
          aria-label="Twitter"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "icon",
              className:
                "rounded-lg md:rounded-none shadow-none md:first:rounded-s-lg md:last:rounded-e-lg focus-visible:z-10",
            })
          )}
        >
          <RiTwitterXFill size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rajgupta2399"
          aria-label="GitHub"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "icon",
              className:
                "rounded-lg md:rounded-none shadow-none md:first:rounded-s-lg md:last:rounded-e-lg focus-visible:z-10",
            })
          )}
        >
          <RiGithubFill size={16} aria-hidden="true" />
        </Link>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "icon",
            className:
              "rounded-lg shadow-none focus-visible:z-10 transition-colors duration-200",
          })
        )}
      >
        {isDarkMode ? (
          <SunIcon className="text-yellow-500" />
        ) : (
          <MoonIcon className="text-blue-500" />
        )}
      </button>
    </div>
  );
}
