import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import Button from "@/components/ui/button";
import PasswordField from "@/components/ui/password-field";

export default function Page() {
    return (
        <form className="flex h-lvh items-center justify-center">
            <div className="w-full max-w-md space-y-6 px-4 lg:px-0">
                <div>
                    <div className="flex items-center gap-1">
                        <h2 className="font-semibold">Signup to dashboard</h2>
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
                    <div>
                        <label htmlFor="username" className="block font-medium">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            className="text-primary-text w-full rounded-sm border-2 border-gray-200 p-2 outline-blue-300 placeholder:font-light placeholder:text-gray-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            className="text-primary-text w-full rounded-sm border-2 border-gray-200 p-2 outline-blue-300 placeholder:font-light placeholder:text-gray-300"
                        />
                    </div>
                    <PasswordField
                        id="password"
                        placeholder="Enter password"
                        label="Password"
                    />
                    <PasswordField
                        id="confirm-password"
                        placeholder="Confirm password"
                        label="Confirm Password"
                    />
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
                </div>

                <div>
                    <Button type="submit">Signup</Button>
                    <p className="text-secondary-text pt-4 text-sm">
                        Already have an account?
                        <Link
                            href="/"
                            className="text-secondary-dark pl-1 font-medium hover:underline"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}
