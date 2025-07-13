import { useState } from "react";
import Input from "../../components/SignPage/Input";
import Button from "../../components/SignPage/Button";
import Logo from "../../components/SignPage/Logo";

type SignInPageProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function SignInPage({onClick}: SignInPageProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password)
    }

    return (
            <div style={{ letterSpacing: '-0.05em' }} className="flex flex-1 justify-center items-center flex-col text-gray-800 pt-8 pb-20 h-full">
                <div className="flex flex-col items-center justify-center w-full px-50 h-full">
                    <Logo className="text-2xl font-bold cursor-default absolute top-0 left-0 mt-8 ml-8"/>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col flex-wrap gap-2">
                            <div className="font-bold text-4xl text-pink-500 cursor-default">
                                다시 오신 걸 환영해요!
                            </div>
                            <div className="font-semibold text-xl cursor-default">
                                Sign in to embrace the unique way of communicating with South Koreans.
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="flex justify-center items-right flex-col w-full">
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

                            <div className="flex">
                                <button
                                    type="button"
                                    className="text-pink-500 font-semibold cursor-pointer underline"
                                    onClick={onClick}
                                >
                                    Sign Up instead
                                </button>
                            </div>

                            <Button>
                                Sign In
                            </Button>
                                
                        </form>
                    </div>
                </div>
            </div>
    )
}