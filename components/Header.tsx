"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ opacity }: { opacity: number }) {
  const pathname = usePathname();

  const menuItems = [
    pathname !== "/" ? { name: "Home", href: "/" } : null, // Replace current page with Home
    pathname !== "/about" ? { name: "About", href: "/about" } : null,
    pathname !== "/projects/" ? { name: "Projects", href: "/#projects" } : null,
    pathname !== "/contact" ? { name: "Contact", href: "/contact" } : null,
  ].filter(Boolean) as { name: string; href: string }[]; // Remove null values

  return (
    <div
      className={`max-w-screen fixed bg-background w-full p-2 px-4 flex text-sm md:text-base justify-between items-center font-Poppins uppercase text-foreground duration-500 z-50 ${
        opacity === 0 ? "opacity-0 pointer-events-none" : `opacity-${opacity} pointer-events-auto`
      }`}
    >
      {/* Name */}
      <div>
        <Link className="relative inline-block overflow-hidden group cursor-pointer tracking-widest px-2" href="/">
          <p className="relative z-10 top-1 transition-transform duration-600 group-hover:-translate-y-full text-foreground">
            Ibrahim Khan
          </p>
          <p className="absolute z-10 top-1 w-full text-background transition-transform duration-300 delay-200 translate-y-full group-hover:translate-y-0">
            Ibrahim Khan
          </p>
          <div className="absolute left-[-10%] top-1 w-[120%] h-full bg-accent transition-transform duration-500 scale-y-0 origin-bottom group-hover:scale-y-100"></div>
        </Link>
      </div>

      {/* Navigation */}
      <ul className="flex md:gap-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="relative inline-block overflow-hidden group cursor-pointer px-2">
              <p className="relative z-10 top-1 transition-transform duration-500 group-hover:-translate-y-full text-foreground">
                {item.name}
              </p>
              <p className="absolute z-10 top-1 w-full text-background transition-transform duration-300 delay-200 translate-y-full group-hover:translate-y-0">
                {item.name}
              </p>
              <div className="absolute left-0 top-1 w-full h-full bg-accent transition-transform duration-500 scale-y-0 origin-bottom group-hover:scale-y-100"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
