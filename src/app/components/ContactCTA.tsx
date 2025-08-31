"use client";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface ContactCTAProps {
  message: string;
}

const ContactCTA = ({ message }: ContactCTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          ¿Necesitas asesoría legal?
        </h2>
        <p className="text-xl text-green-100 mb-8 leading-relaxed">{message}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Agenda tu consulta
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ContactCTA;
