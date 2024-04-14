'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#627254] text-[#DDDDDD] fixed w-full z-10 top-0 shadow">
      <div className="flex justify-between items-center h-16 lg:px-[160px] px-[16px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
          <div className="block lg:hidden h-8 w-auto text-2xl font-semibold">
            <Link href="/">
              B
            </Link>
          </div>
          <div className="hidden lg:block h-8 w-auto text-2xl font-semibold">
            <Link href="/">
              Bianca Salvador
            </Link>
          </div>
        </div>
        
        {/* Navigation links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link href="#sobre" className="hover:bg-[#76885B] px-3 py-2 rounded-md text-sm font-medium">
              Sobre
          </Link>
          <Link href="#contato" className="hover:bg-[#76885B] px-3 py-2 rounded-md text-sm font-medium">
              Contato
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="bg-[#76885B] p-2 rounded-md text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="#sobre" className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Sobre
          </Link>
          <Link href="#contato" className="text-white hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
