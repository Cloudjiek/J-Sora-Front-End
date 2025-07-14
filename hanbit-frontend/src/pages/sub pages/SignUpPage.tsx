import { useState } from "react";
import Input from "../../components/SignPage/Input";
import Checkbox from "../../components/SignPage/Checkbox";
import Button from "../../components/SignPage/Button";
import Logo from "../../components/Logo";

type SignUpPageProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SignUpPage({onClick}: SignUpPageProps) {
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
            <div style={{ letterSpacing: '-0.05em' }} className="flex flex-1 justify-center items-center flex-col text-gray-800 pt-8 pb-20 h-full">
                <div className="flex flex-col justify-center w-full px-50 h-full">
                    <Logo className="text-2xl font-bold cursor-default absolute top-0 left-0 mt-8 ml-8"/>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col flex-wrap gap-2">
                                <div className="font-bold text-4xl text-pink-500 cursor-default">
                                    こんにちは!
                                </div>
                                <div className="font-semibold text-xl cursor-default">
                                    Sign up to embrace the unique way of communicating with Japanese people.
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
                                required={true}
                            />

                            <Input 
                                label="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last name"
                                type="text"
                                required={true}
                            />

                            <Input 
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                type="email"
                                required={true}
                            />

                            <Input 
                                label="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                                required={true}
                            />

                            <div className="flex flex-col items-start gap-2">
                                <Checkbox 
                                    label="I agree to the terms and conditions."
                                    onChange={(e) => setChecked(e.target.checked)}
                                    checked={checked}
                                />
                                <button
                                    type="button"
                                    className="text-pink-500 font-semibold cursor-pointer underline"
                                    onClick={onClick}
                                >
                                    Sign In instead
                                </button>
                            </div>

                            <Button
                                disabled={!checked}
                            >
                                Sign Up
                            </Button>
                                
                        </form>
                    </div>
                </div>
            </div>
        
    )
}