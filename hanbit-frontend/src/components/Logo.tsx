import { div } from "framer-motion/client";
import type React from "react";

type LogoProps = {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({
    className
}) => {
    return (
        <div className={className}>
            J-Sora
        </div>
    )
}

export default Logo;