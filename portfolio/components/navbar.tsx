"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
    ];

    export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-blue-500/10 bg-[#020617]/80 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            
            {/* Logo */}
            <Link
            href="/"
            className="group text-xl font-bold tracking-tight text-white"
            >
            <span className="text-blue-500">&lt;</span>
            dev
            <span className="text-blue-500">/&gt;</span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className="relative text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                >
                <span className="mr-1 text-blue-500">./</span>
                {item.name}
                </Link>
            ))}
            </div>

            {/* Mobile button */}
            <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 text-slate-300 transition hover:border-blue-500/50 hover:text-white md:hidden"
            aria-label="Abrir menu"
            >
            <div className="space-y-1.5">
                <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
                />
                <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${
                    menuOpen ? "opacity-0" : ""
                }`}
                />
                <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
                />
            </div>
            </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
            <div className="border-t border-blue-500/10 bg-[#020617]/95 px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                    <span className="mr-1 text-blue-500">./</span>
                    {item.name}
                </Link>
                ))}
            </div>
            </div>
        )}
        </header>
    );
}