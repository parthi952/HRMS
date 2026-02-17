


type Option = {
  label: string;
  value: string | number;
};
type SelectionProps = {
  label: string;
  name: string;
  value: string;
  options: Option[] ;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
};

export const Selection = ({
  label,
  name,
  value,
  options,
  onChange,
  placeholder,
}: SelectionProps) => {
  return (
    <div className="block mb-1 text-sm font-medium text-gray-700">
      <label className="block mb-1 font-medium">{label}</label>
      <select
        name={name}        // ✅ MUST BE HERE
        value={value}
        onChange={onChange}
        className="w-full border rounded px-3 py-2"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
