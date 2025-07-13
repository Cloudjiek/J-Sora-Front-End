import { motion } from "framer-motion";
import { useEffect, useState } from "react"

const images = [
    "./src/assets/bridge.jpg",
    "./src/assets/building.jpg",
    "./src/assets/city.jpg",
    "./src/assets/street.jpg",
    "./src/assets/street2.jpg",
    "./src/assets/tall_building.jpg",
    "./src/assets/tower.jpg",
]

export default function MotionImageSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-1 w-full h-full object-cover block relative overflow-hidden shadow-inner">
            <motion.img 
                key={index}
                src={images[index]}
                alt="image slider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="inset-0 w-full h-full object-cover absolute"
            />

            <img 
                src={images[(index - 1 + images.length) % images.length]}
                className="inset-0 w-full h-full object-cover" 
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 1)',
                    zIndex: 10,
                }}
            />
        </div>
    )
}