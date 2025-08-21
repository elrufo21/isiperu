"use client";
import React from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

interface ProjectModalProps {
  proyecto: {
    id: string;
    titulo: string;
    ubicacion: string;
    estado: string;
    tipo: string;
    imagen: string;
    caracteristicas: string[];
    destacado: boolean;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  proyecto,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!isOpen || !proyecto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {proyecto.titulo}
              </h2>
              <div className="flex items-center text-emerald-100 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{proyecto.ubicacion}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-100 rounded-full text-sm font-medium">
                  {proyecto.tipo}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-100 rounded-full text-sm font-medium">
                  {proyecto.estado}
                </span>
                {proyecto.destacado && (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-100 rounded-full text-sm font-medium">
                    Destacado
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors ml-4"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Section */}
          <div className="mb-8">
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl overflow-hidden">
              {proyecto.imagen ? (
                <>
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 40%" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-emerald-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-emerald-700 font-medium">
                      Proyecto Completado
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Características del Proyecto
              </h3>
              <div className="space-y-3">
                {proyecto.caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Información Adicional
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Ubicación Estratégica
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {proyecto.ubicacion} se encuentra en una zona de crecimiento
                    y desarrollo, ofreciendo excelentes oportunidades de
                    inversión y calidad de vida.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Estado del Proyecto
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Este proyecto ha sido completado exitosamente, con toda la
                    infraestructura y servicios implementados según los
                    estándares de calidad de ISI Perú.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ¿Interesado en este proyecto?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Llámanos</p>
                  <p className="font-semibold text-gray-800">+51 999 999 999</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Escríbenos</p>
                  <p className="font-semibold text-gray-800">
                    info@isiperu.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-emerald-200">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                Solicitar Información Detallada
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
