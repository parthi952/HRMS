

type Form={
    Lable : string,
    in_PlaceHolder : string,
    value : string | number ,
    name : string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const FormFiled = ({ Lable, name, value, onChange, in_PlaceHolder }:Form) => {
  return (
    <div className="block mb-1 text-sm font-medium text-gray-700">
      <label className="block mb-1 font-medium">{Lable}</label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={in_PlaceHolder}
        onChange={onChange}
        className="w-full border p-2 rounded"
      />
    </div>
  );
};

