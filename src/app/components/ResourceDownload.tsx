"use client";

interface Resource {
  title: string;
  description: string;
  type: "pdf" | "guide" | "article";
  downloadUrl: string;
}

interface ResourceDownloadProps {
  resources: Resource[];
}

const ResourceDownload = ({ resources }: ResourceDownloadProps) => {
  // Validación de props
  if (!resources || !Array.isArray(resources) || resources.length === 0) {
    return null; // No renderizar si no hay recursos
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return "📄";
      case "guide":
        return "📚";
      case "article":
        return "📝";
      default:
        return "📄";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "pdf":
        return "PDF";
      case "guide":
        return "Guía";
      case "article":
        return "Artículo";
      default:
        return "Documento";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Recursos descargables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-green-300 transition-colors duration-200"
            >
              <div className="text-center mb-4">
                <span className="text-4xl">{getTypeIcon(resource.type)}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                {resource.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                {resource.description}
              </p>

              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {getTypeLabel(resource.type)}
                </span>

                <a
                  href={resource.downloadUrl}
                  download
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200 w-full"
                >
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceDownload;
