"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Textfield, { TextfieldProps } from "./ui/textfield";
import IconButton from "./icon-button";

type Props = TextfieldProps & {
    error?: string;
};

export default function PasswordField(props: Props) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <Textfield
            id={props.id}
            variant="outlined"
            type={passwordVisible ? "text" : "password"}
            {...props}
            inputAdornment={
                <IconButton
                    onClick={() => setPasswordVisible(!passwordVisible)}
                >
                    {passwordVisible ? (
                        <Eye className="text-secondary-text size-[20px]" />
                    ) : (
                        <EyeOff className="text-secondary-text size-[20px]" />
                    )}
                </IconButton>
            }
        />
    );
}
