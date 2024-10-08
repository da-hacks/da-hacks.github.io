"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { IconMenu2, IconX, IconBrandDiscord } from "@tabler/icons-react";

import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sponsors", href: "#sponsor" },
  { name: "FAQ", href: "#faqs" },
  { name: "Contact", href: "#contact" },
  { name: "Socials", href: "#socials" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setShow(visible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar ${
        show ? "sticky top-0 z-50" : " "
      }   inset-x-0 top-0 z-50 backdrop-filter backdrop-blur-lg`}
    >
      <nav
        className="flex items-center justify-between p-1 lg:px-8 text-[1.5rem] font-semibold leading-6 text-da_gold "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">De Anza Hacks</span>
            <Image
              className="h-16 w-auto"
              src="/dahackslogo.png"
              width={100}
              height={100}
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden px-4">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-da_gold"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu2 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              className="hover:text-da_lighest_hover"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end p-2 text-[1.5rem] font-semibold leading-6 text-da_gold">
          <div className="flex gap-6">
            <Link
              href="https://discord.com/invite/V225BEAD9S"
              target="_blank"
              className="flex items-center gap-2"
            >
              <IconBrandDiscord className="h-6 w-6" aria-hidden="true" />
              Discord
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-da_dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">De Anza Hacks</span>
              <Image
                className="h-16 w-auto"
                src="/dahackslogo.png"
                width={100}
                height={100}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IconX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-da_gold hover:bg-slate-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="https://github.com/da-hacks/awesome-projects-boilerplates"
                target="_blank"
                className="-mx-3 block rounded-lg flex px-3 py-2 items-center gap-2 text-base font-semibold leading-7 text-da_gold hover:bg-slate-400"
              >
                New Hackers? 💻
              </Link>
              <Link
                href="https://discord.com/invite/V225BEAD9S"
                target="_blank"
                className="-mx-3 block rounded-lg flex px-3 py-2 items-center gap-2 text-base font-semibold leading-7 text-da_gold hover:bg-slate-400"
              >
                Discord
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
