"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Customers", path: "/dashboard/customers" },
  { name: "Invoices", path: "/dashboard/invoices" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <section>
      <nav>
        <ul>
          {links.map((link) => (
            <Link
              key={link.name}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "text-red-600 text-xl": pathname === link.path,
                }
              )}
              href={`${link.path}`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
}
