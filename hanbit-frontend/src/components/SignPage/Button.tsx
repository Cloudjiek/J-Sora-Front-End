type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    disabled
}) => {
    return (
        <button 
            className="mt-10 border-pink-500 border-3 w-full py-4 rounded text-pink-500 font-bold text-xl cursor-pointer hover:bg-pink-500 hover:text-white transition-colors duration-200 ease-in-out" 
            disabled={disabled}
            type="submit"
        >
            {children}
        </button>
    )
}

export default Button;