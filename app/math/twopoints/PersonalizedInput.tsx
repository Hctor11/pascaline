
interface props{
    value: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    name: string;
    placeholder: string
}

const PersonalizedInput = ({value, onChange, name, placeholder}:props) => {
  return (
    <>
        <input
            type="number"
            className="border w-12 rounded-md text-center px-1"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
    </>
  )
}

export default PersonalizedInput