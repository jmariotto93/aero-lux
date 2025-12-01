import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  category: string;
}

export function CategoryCard({ icon: Icon, title, category }: CategoryCardProps) {
  return (
    <Link
      to={`/catalogo?categoria=${encodeURIComponent(category)}`}
      className="group border border-gray-200 p-8 transition-all duration-300 hover:border-[#0A1A2F] hover:shadow-lg"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#0A1A2F] transition-colors">
          <Icon className="w-7 h-7 text-gray-600 group-hover:text-[#0A1A2F] transition-colors" />
        </div>
        <h4 className="text-[#0A1A2F]">{title}</h4>
      </div>
    </Link>
  );
}
