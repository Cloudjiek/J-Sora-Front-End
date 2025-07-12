type InputProps = {
    label?: string;
    type?: string;
    name?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

const Input: React.FC<InputProps> = ({
    label,
    type = "text", 
    name, 
    value, 
    onChange, 
    placeholder
}) => {
    return (
        <div className="flex flex-col mb-4 text-xl gap-2 w-full">
            {label && (
                <label htmlFor={name} className="font-medium">
                    {label}
                </label>
            )}
            <input 
                className="rounded bg-white font-medium w-full h-15 border-none focus:outline-none focus:ring-2 focus:ring-pink-500 pl-2"
                style={{boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
             />
        </div>
    );
};

export default Input;
