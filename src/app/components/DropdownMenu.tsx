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
  const [shouldRender, setShouldRender] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<'left' | 'center' | 'right'>('center');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Manejar el renderizado del dropdown
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isOpen) {
      setShouldRender(true);
    } else {
      // Delay para permitir que la animación de salida se complete
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 200);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen]);

  // Calcular posición cuando el dropdown se renderiza
  useEffect(() => {
    if (shouldRender && buttonRef.current && dropdownRef.current) {
      const calculatePosition = () => {
        const buttonRect = buttonRef.current!.getBoundingClientRect();
        const dropdownWidth = dropdownRef.current!.offsetWidth;
        const viewportWidth = window.innerWidth;
        
        const buttonCenter = buttonRect.left + buttonRect.width / 2;
        const dropdownHalfWidth = dropdownWidth / 2;
        
        // Determinar si el dropdown se sale por los lados
        const wouldOverflowLeft = buttonCenter - dropdownHalfWidth < 20;
        const wouldOverflowRight = buttonCenter + dropdownHalfWidth > viewportWidth - 20;
        
        if (wouldOverflowLeft) {
          setDropdownPosition('left');
        } else if (wouldOverflowRight) {
          setDropdownPosition('right');
        } else {
          setDropdownPosition('center');
        }
      };

      // Usar requestAnimationFrame para asegurar que el DOM esté listo
      requestAnimationFrame(calculatePosition);
    }
  }, [shouldRender]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleClick = () => {
    if (item.href.includes("servicios")) {
      window.location.assign("#" + item.href);
    }
    setIsOpen(!isOpen);
  };

  if (!item.hasSubmenu || !item.submenu) {
    return null;
  }

  const getGridCols = (columns: number) => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1";
    }
  };

  // Obtener clases de posicionamiento basadas en la posición calculada
  const getPositionClasses = () => {
    switch (dropdownPosition) {
      case 'left':
        return 'left-0';
      case 'right':
        return 'right-0';
      case 'center':
      default:
        return 'left-1/2 -translate-x-1/2';
    }
  };

  // Ancho responsivo más conservador
  const getResponsiveWidth = (columns: number) => {
    if (columns === 1) {
      return 'w-72 sm:w-80';
    }
    if (columns === 2) {
      return 'w-80 sm:w-96 md:w-[28rem]';
    }
    if (columns === 3) {
      return 'w-80 sm:w-96 md:w-[32rem] lg:w-[40rem]';
    }
    return 'w-80 sm:w-96 md:w-[32rem] lg:w-[40rem] xl:w-[48rem]';
  };

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        className={`flex items-center space-x-1 font-montserrat font-regular text-gray-700 transition-colors duration-200 ${
          isActive ? "text-[#20B266]" : "hover:text-[#20B266]"
        }`}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{item.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu - Solo renderizar cuando sea necesario */}
      {shouldRender && (
        <div
          ref={dropdownRef}
          className={`absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200/50 backdrop-blur-sm transition-all duration-200 z-50 max-w-[calc(100vw-2rem)] ${getResponsiveWidth(
            item.columns || 1
          )} ${getPositionClasses()} ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {item.submenu.map((section, sectionIndex) => (
            <div key={sectionIndex} className="p-3 sm:p-4 md:p-5">
              {/* Título de la sección si existe */}
              {section.title && (
                <h3 className="font-montserrat font-semibold text-gray-800 mb-3 text-xs sm:text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
              )}
              
              <div className={`grid ${getGridCols(item.columns || 1)} gap-2 sm:gap-3`}>
                {section.columns.flatMap((column) =>
                  column.items.map((menuItem) => (
                    <Link
                      key={menuItem.href || crypto.randomUUID()}
                      href={menuItem.href || "#"}
                      onClick={onClose}
                      className="group block p-2 sm:p-3 rounded-md hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="font-montserrat font-medium text-gray-800 group-hover:text-[#20B266] transition-colors duration-200 text-sm leading-tight">
                            {menuItem.label}
                          </div>
                          {menuItem.description && (
                            <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-200 line-clamp-2">
                              {menuItem.description}
                            </div>
                          )}
                        </div>
                        {menuItem.external && (
                          <ExternalLink
                            size={12}
                            className="text-gray-400 flex-shrink-0 group-hover:text-[#20B266] transition-colors duration-200 mt-0.5"
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
      )}
    </div>
  );
};

export default DropdownMenu;