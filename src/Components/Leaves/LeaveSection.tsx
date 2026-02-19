
import { Link } from "react-router-dom";

interface LeaveSectionProps {
    title: string;
  description: string;
  path: string;
  action: string;
  IMG:string;

}


export const LeaveSection = ({
  title,
  description,
  path,
  action,
  IMG
}: LeaveSectionProps) => {
  return( 
  <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
    <div className="flex items-start gap-4">
      <img
        src={IMG}
        alt={title}
        className="w-14 h-14 object-contain"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          {description}
        </p>
      </div>
    </div>

    <Link
      to={path}
      className="text-blue-600 font-medium hover:underline"
    >
      {action} →
    </Link>
  </div>
);

}
