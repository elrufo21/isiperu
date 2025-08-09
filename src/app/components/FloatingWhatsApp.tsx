import Link from "next/link";

const PHONE_E164 = "51900460040"; // +51 900460040
const PREFILL = encodeURIComponent(
  "Hola, me interesa información sobre ISI Perú."
);

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${PHONE_E164}?text=${PREFILL}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-xl ring-4 ring-[#25D366]/20 hover:shadow-2xl transition-all duration-200"
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.28c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.08-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.58.13-.12.29-.31.43-.46.14-.15.19-.26.29-.43.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.02.14.19 2 3.06 4.84 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.95-1.36.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z" />
          <path d="M26.73 5.27A13.5 13.5 0 0 0 4.6 22.78L3 29l6.36-1.66a13.49 13.49 0 0 0 20.38-11.72 13.4 13.4 0 0 0-3-10.35zM16.5 26.5a10 10 0 0 1-5.1-1.4l-.37-.22-3.8 1 1-3.7-.24-.38A10 10 0 1 1 16.5 26.5z" />
        </svg>
      </Link>
    </div>
  );
}
