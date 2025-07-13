type CheckboxProps = {
    label?: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked, 
    onChange, 
}) => {
    return (
        <label className="text-1xl">
            <input 
                className="mr-2
                accent-pink-500" 
                type="checkbox"
                checked={checked} 
                onChange={onChange} 
            />
            <span>{label}</span>
        </label>
    );
};

export default Checkbox;
