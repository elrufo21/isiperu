"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { NavigationItem } from "../../types/menu";

interface MobileMenuProps {
  navItems: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
  isActivePath: (test: (path: string) => boolean) => boolean;
}

const MobileMenu = ({
  navItems,
  isOpen,
  onClose,
  isActivePath,
}: MobileMenuProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const isExpanded = (label: string) => expandedItems.has(label);

  return (
    <div
      className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden`}
    >
      <nav className="pt-4 pb-2 border-t border-gray-100 mt-4">
        <div className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const active = isActivePath(item.match);
            const hasSubmenu = item.hasSubmenu && item.submenu;

            return (
              <div key={item.href}>
                {hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className={`w-full text-left font-montserrat font-regular py-3 px-3 rounded-md transition-colors duration-200 flex items-center justify-between ${
                        active
                          ? "text-[#20B266] bg-gray-50"
                          : "text-gray-700 hover:text-[#20B266] hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          isExpanded(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Submenu */}
                    <div
                      className={`transition-all duration-200 overflow-hidden ${
                        isExpanded(item.label)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 border-l-2 border-gray-200 pl-4 py-2 space-y-1">
                        {item.submenu?.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            {section.columns.map((column, columnIndex) => (
                              <div key={columnIndex}>
                                <div className="space-y-1">
                                  {column.items.map((menuItem, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      href={menuItem.href}
                                      onClick={onClose}
                                      className="block py-2 px-3 rounded-md text-gray-700 hover:text-[#20B266] hover:bg-gray-50 transition-colors duration-200"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <div className="font-montserrat font-medium text-sm">
                                            {menuItem.label}
                                          </div>
                                          {menuItem.description && (
                                            <div className="text-xs text-gray-500 mt-1">
                                              {menuItem.description}
                                            </div>
                                          )}
                                        </div>
                                        {menuItem.external && (
                                          <ExternalLink
                                            size={14}
                                            className="text-gray-400 ml-2"
                                          />
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block font-montserrat font-regular py-3 px-3 rounded-md transition-colors duration-200 ${
                      active
                        ? "text-[#20B266] bg-gray-50"
                        : "text-gray-700 hover:text-[#20B266] hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Contact Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="font-montserrat font-regular">900460040</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-montserrat font-regular">
                isiperu25@gmail.com
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
