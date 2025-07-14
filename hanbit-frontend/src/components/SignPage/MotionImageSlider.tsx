import { motion } from "framer-motion";
import { useEffect, useState } from "react"

const images = [
    "./src/assets/FUKUOKA-fukuoka_tower.jpg",
    "./src/assets/HIROSHIMA-peace_memorial_park.jpg",
    "./src/assets/KIOTO-golden_pavilion.jpg",
    "./src/assets/OSAKA-osaka_castle.jpg",
    "./src/assets/TOKYO-tokyo_tower.jpg",
]

const images_description_en = [
    "Fukuoka Tower - Fukuoka",
    "Peace Memorial Park - Hiroshima",
    "Golden Pavilion - Kioto",
    "Osaka Castle - Osaka",
    "Tokyo Tower - Tokyo"
]

const images_description_jp = [
    "福岡タワー (ふくおかタワー) - 福岡 (ふくおか)",
    "平和記念公園 (へいわきねんこうえん) - 広島 (ひろしま)",
    "金閣寺 (きんかくじ) - 京都 (きょうと)",
    "大阪城 (おおさかじょう) - 大阪 (おおさか)",
    "東京タワー (とうきょうタワー) - 東京 (とうきょう)"
];
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
                alt={images_description_en[index]}
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