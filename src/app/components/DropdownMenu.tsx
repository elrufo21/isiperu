"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { NavigationItem } from "../../types/menu";

interface DropdownMenuProps {
  item: NavigationItem;
  isActive: boolean;
  onClose: () => void;
}

const DropdownMenu = ({ item, isActive, onClose }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  if (!item.hasSubmenu || !item.submenu) {
    return null;
  }

  const getGridCols = (columns: number) => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1";
    }
  };

  return (
    <div
      ref={menuRef}
      className={`relative ${(item.columns as number) > 1 ? "px-4" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${
          item.href.includes("servicios") ? "cursor-pointer" : ""
        } flex items-center space-x-1 font-montserrat font-regular text-gray-700 transition-colors duration-200 ${
          isActive ? "text-[#20B266]" : "hover:text-[#20B266]"
        }`}
        onClick={() => window.location.assign("#" + item.href)}
      >
        <span>{item.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200/50 backdrop-blur-sm transition-all duration-200 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
        style={{
          minWidth:
            item.columns === 1
              ? "280px"
              : item.columns === 2
              ? "500px"
              : item.columns === 3
              ? "700px"
              : "800px",
          left: item.columns === 1 ? "0" : "50%",
          transform: item.columns === 1 ? "none" : "translateX(-50%)",
        }}
      >
        {item.submenu.map((section, sectionIndex) => (
          <div key={sectionIndex} className="p-6">
            <div className={`grid ${getGridCols(item.columns || 1)} gap-6`}>
              {section.columns.flatMap((column) =>
                column.items.map((menuItem, itemIndex) => (
                  <Link
                    key={crypto.randomUUID()}
                    href={menuItem.href}
                    onClick={onClose}
                    className="group block p-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-montserrat font-medium text-gray-800 group-hover:text-[#20B266] transition-colors duration-200">
                        {menuItem.label}
                      </div>
                      {menuItem.external && (
                        <ExternalLink
                          size={16}
                          className="text-gray-400 ml-2 flex-shrink-0"
                        />
                      )}
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
