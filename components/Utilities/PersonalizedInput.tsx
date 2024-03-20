interface Props {
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  placeholder: string;
  width?: number;
}

const PersonalizedInput = ({ value, onChange, name, placeholder, width }: Props) => {
  return (
    <>
      <input
        type="number"
        className={`border rounded-md text-center px-2 py-1 ${
          width ? `w-${width}` : "w-12"
        }`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default PersonalizedInput;
