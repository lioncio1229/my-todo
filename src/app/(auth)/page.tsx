import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import Button from "@/components/ui/button";
import Textfield from "@/components/ui/textfield";
import PasswordField from "@/components/ui/password-field";

export default function Page() {
    return (
        <form action="/main" className="flex h-lvh items-center justify-center">
            <div className="w-full max-w-md space-y-6 px-4 lg:px-0">
                <div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-semibold">Login to dashboard</h2>
                        <LockKeyhole
                            className="text-secondary-main"
                            size={24}
                        />
                    </div>
                    <h5 className="text-secondary-text">
                        Fill the below form to login
                    </h5>
                </div>
                <div className="space-y-4">
                    <Textfield
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        label="Email"
                        variant="outlined"
                    />
                    <PasswordField
                        id="password"
                        placeholder="Enter password"
                        label="Password"
                    />
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="checkbox-primary-main"
                            />
                            <label
                                htmlFor="remember-me"
                                className="cursor-pointer select-none"
                            >
                                Remember me
                            </label>
                        </div>
                        <Link
                            href="#"
                            className="text-secondary-dark hover:underline"
                        >
                            Forgot password
                        </Link>
                    </div>
                </div>

                <div>
                    <Button type="submit">Login</Button>
                    <p className="text-secondary-text pt-4 text-sm">
                        Don&apos;t have an account yet?{" "}
                        <Link
                            href="/signup"
                            className="text-secondary-dark pl-1 font-medium hover:underline"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}
