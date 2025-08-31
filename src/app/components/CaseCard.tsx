"use client";

interface CaseCardProps {
  title: string;
  description: string;
  solution: string;
}

const CaseCard = ({ title, description, solution }: CaseCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700 mb-2">
            Descripción del caso:
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Nuestra solución:</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
