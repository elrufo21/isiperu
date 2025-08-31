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
        className="group inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-xl ring-4 ring-[#25D366]/20 hover:scale-110 hover:shadow-2xl transition-all duration-300"
      >
        {/* WhatsApp Logo Oficial */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8 text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill="#fff"
            d="M34.6 29.3c-.6-.3-3.5-1.7-4-1.9-.5-.2-.8-.3-1.1.3s-1.2 1.9-1.5 2.3c-.3.4-.6.5-1.1.2s-2.1-.8-4-2.6c-1.5-1.3-2.6-3-2.9-3.5-.3-.5 0-.8.2-1.1.2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.9-.1-.3-1.1-2.7-1.5-3.7-.4-.9-.8-.8-1.1-.8h-1c-.3 0-.9.1-1.3.6-.4.4-1.7 1.6-1.7 4s1.7 4.7 1.9 5c.2.3 3.4 5.1 8.2 7.1 4.9 2 4.9 1.3 5.8 1.2.9-.1 2.9-1.2 3.3-2.3.4-1.1.4-2 .3-2.3 0-.3-.2-.4-.8-.7z"
          />
          <path
            fill="#fff"
            d="M24 4C12.9 4 4 12.9 4 24c0 4.2 1.2 8.1 3.5 11.5L4 44l8.8-3.3C15.1 42.8 19.4 44 24 44c11.1 0 20-8.9 20-20S35.1 4 24 4zm0 36c-3.9 0-7.5-1.2-10.5-3.4l-.7-.5-5.2 2L9 33.1l-.5-.8C6.9 29.9 6 27 6 24 6 14.6 14.6 6 24 6s18 8.6 18 18-8.6 18-18 18z"
          />
        </svg>
      </Link>
    </div>
  );
}
