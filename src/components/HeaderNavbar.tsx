"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { images } from "../../public/images/images";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, Phone, Mail } from "lucide-react";

// Navigation items following Single Responsibility Principle
interface NavItem {
  href: string;
  label: string;
  description?: string;
}

const navigationItems: NavItem[] = [
  { href: "/", label: "Home", description: "Welcome to Solan Ushering" },
  { href: "/about", label: "About Us", description: "Our story and team" },
  {
    href: "/services",
    label: "Services",
    description: "Professional ushering solutions",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    description: "Our successful events",
  },
  { href: "/contact", label: "Contact", description: "Get in touch with us" },
];

// Logo component following Single Responsibility Principle
const SolanLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex items-center space-x-3", className)}>
    <div className="relative">
      <Image
        src={images.logoimage}
        alt="Solan Ushering Services Logo"
        width={80}
        height={70}
        className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        priority
      />
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-lg solan-gradient-text leading-tight">
        SOLAN USHERING
      </span>
      <span className="text-xs text-solan-orange font-medium tracking-wider">
        SERVICES
      </span>
    </div>
  </div>
);

// Navigation link component following Open/Closed Principle
const NavLink: React.FC<{
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}> = ({ href, label, isActive, onClick, className }) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md focus-solan",
      "text-white hover:text-white/80",
      isActive
        ? "text-white bg-white/20 shadow-md"
        : "text-white/90 hover:bg-white/10",
      className
    )}
  >
    {label}
    {isActive && (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 solan-gradient rounded-full" />
    )}
  </Link>
);

// Mobile navigation component following Single Responsibility Principle
const MobileNavigation: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}> = ({ isOpen, onClose, pathname }) => (
  <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent side="right" className="w-full sm:w-80">
      <div className="flex flex-col h-full">
        {/* Mobile Logo */}
        <div className="flex items-center justify-between py-4 border-b">
          <SolanLogo />
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex-1 py-6">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.href} className="space-y-1">
                <NavLink
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                  onClick={onClose}
                  className="w-full justify-start text-base p-4 text-foreground hover:bg-muted/50"
                />
                {item.description && (
                  <p className="text-xs text-muted-foreground px-4 ml-4">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile CTA */}
        <div className="border-t pt-6 space-y-4">
          <Button className="btn-solan w-full">
            <Phone className="h-4 w-4 mr-2" />
            Call 0723128349
          </Button>
          <div className="flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

// Main Header component following SOLID principles
const HeaderNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect following Single Responsibility Principle
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "solan-gradient/95 backdrop-blur-md shadow-lg border-b"
          : "solan-gradient/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <SolanLogo className="hover:scale-105 transition-transform duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ModeToggle />
            <Button asChild className="bg-white text-solan-orange hover:bg-white/90 shadow-lg hover:shadow-xl font-semibold">
              <Link href="tel:0723128349">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ModeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <MobileNavigation
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                pathname={pathname}
              />
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="lg:hidden solan-gradient text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-center space-x-4 text-sm">
          <a
            href="tel:0723128349"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">0723128349</span>
          </a>
          <div className="w-px h-5 bg-white/30" />
          <span className="text-sm font-medium">Excellence in Service</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavbar;
