import { useState } from "react";
import MotionImageSlider from "../components/SignPages/MotionImageSlider";
import SignUpPage from "./sub pages/SignUpPage";
import SignInPage from "./sub pages/SignInPage";

export default function SignPage() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex w-full h-screen">
            {isSignUp 
                ? <SignUpPage onClick={() => setIsSignUp(false)} /> 
                : <SignInPage onClick={() => setIsSignUp(true)}/>}
            <MotionImageSlider />
        </div>
    )
}