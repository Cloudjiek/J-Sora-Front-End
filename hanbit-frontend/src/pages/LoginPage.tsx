import { useState } from "react";
import Input from "../components/LoginPage/Input";
import Checkbox from "../components/LoginPage/Checkbox";
import Button from "../components/LoginPage/Button";
import MotionImageSlider from "../components/LoginPage/MotionImageSlider";
import Logo from "../components/LoginPage/Logo";

export default function LoginPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, checked)
    }

    return (
        <div className="flex w-full h-screen">
            <div style={{ letterSpacing: '-0.05em' }} className="flex flex-1 justify-center items-center flex-col text-gray-800 pt-8 pb-20 h-full">
                <div className="flex flex-col w-full px-50 h-full">
                    <Logo className="text-2xl font-bold cursor-default"/>
                        <div className="flex flex-col gap-10 mt-auto">
                            <div className="flex flex-col flex-wrap gap-2">
                                <div className="font-bold text-4xl text-pink-500 cursor-default">
                                    안녕하세요!
                                </div>
                                <div className="font-semibold text-xl cursor-default">
                                    Sign up to embrace the unique way of communicating with South Koreans.
                                </div>
                            </div>
                        <form onSubmit={handleSubmit} className="flex justify-center items-right flex-col w-full">
                            <Input 
                                label="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First name"
                                type="text"
                            />

                            <Input 
                                label="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last name"
                                type="text"
                            />

                            <Input 
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                type="email"
                            />

                            <Input 
                                label="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                            />

                            <Checkbox 
                                label="I agree to the terms and conditions."
                                onChange={(e) => setChecked(e.target.checked)}
                                checked={checked}
                            />

                            <Button
                                disabled={!checked}
                            >
                                Sign Up
                            </Button>
                                
                        </form>
                    </div>
                </div>
            </div>
            <MotionImageSlider />
        </div>
    )
}