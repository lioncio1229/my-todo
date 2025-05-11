"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = Partial<React.InputHTMLAttributes<HTMLInputElement>>;

export default function PasswordField(props: Props) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="relative h-[43px]">
            <input
                id={props.id}
                type={passwordVisible ? "text" : "password"}
                placeholder={props.placeholder}
                {...props}
            />
            <button
                type="button"
                className="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer rounded-full p-2 hover:bg-gray-100"
                onClick={() => setPasswordVisible(!passwordVisible)}
            >
                {passwordVisible ? (
                    <EyeOff size={20} className="text-secondary-text" />
                ) : (
                    <Eye size={20} className="text-secondary-text" />
                )}
            </button>
        </div>
    );
}
