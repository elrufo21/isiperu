"use client";

import React from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactoForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^[0-9]{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Ingresa un teléfono válido (9 dígitos)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-emerald-400/10 rounded-full blur-xl" />

      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Send className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Envíanos un Mensaje
          </h2>
          <p className="text-sm text-slate-600">
            Completa el formulario y te contactaremos pronto
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <div className="text-emerald-700">
              <p className="font-medium text-sm">
                ¡Mensaje enviado exitosamente!
              </p>
              <p className="text-xs">Te contactaremos pronto.</p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <div className="text-red-700">
              <p className="font-medium text-sm">Error al enviar el mensaje</p>
              <p className="text-xs">Por favor, inténtalo nuevamente.</p>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-slate-700 mb-1"
            >
              Nombre Completo *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={onChange}
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                } placeholder-gray-400`}
                disabled={isSubmitting}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email and Phone in same row for larger screens */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={onChange}
                  className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                  } placeholder-gray-400`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-slate-700 mb-1"
              >
                Teléfono *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="999 000 000"
                  value={formData.phone}
                  onChange={onChange}
                  className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-sm ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                  } placeholder-gray-400`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-slate-700 mb-1"
            >
              Mensaje *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos sobre tu proyecto inmobiliario..."
                rows={3}
                value={formData.message}
                onChange={onChange}
                className={`w-full pl-10 pr-3 py-2.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none text-sm ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                } placeholder-gray-400`}
                disabled={isSubmitting}
              />
            </div>
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-md hover:shadow-emerald-200/50 active:scale-[0.98]"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="text-sm">Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span className="text-sm">Enviar Mensaje</span>
              </>
            )}
          </button>

          {/* Privacy Notice */}
          <p className="text-xs text-slate-500 text-center leading-tight">
            Al enviar este formulario, aceptas que ISI Perú se comunique contigo
            para brindarte información sobre nuestros servicios inmobiliarios.
          </p>
        </form>
      </div>
    </div>
  );
}
