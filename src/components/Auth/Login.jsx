"use client";
import { authClient } from "@/lib/auth-client";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        // console.log("Form submitted with:", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        // console.log("Login response:", { data, error });

        if (error) {
            toast.error(error.message);
        }
        if (data) {
            toast.success("Login Successful");
        }
    };

    // google login
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div className="max-w-110 sm:max-w-130 md:max-w-150 w-full mx-auto bg-linear-to-br from-[#1a1a3d] via-[#2f2f6f] to-[#272757] p-5 sm:p-7 md:p-10 rounded-[5px]">
            <h2 className="text-[#C2B280] text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-4 sm:mb-5">
                Login your account
            </h2>

            <Form
                className="flex flex-col gap-3 sm:gap-4 px-2 sm:px-4 md:px-6"
                onSubmit={onSubmit}
            >
                <TextField
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                value,
                            )
                        ) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-[#98a869] mb-1 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold">
                        Email address
                    </Label>
                    <Input
                        className="rounded-[5px] bg-[#F3F3F3] p-3 sm:p-4 text-sm sm:text-base"
                        name="email"
                        placeholder="Enter your email address"
                    />
                    <FieldError />
                </TextField>

                <TextField className="w-full" name="password">
                    <Label className="text-[#98a869] mb-1 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold">
                        Password
                    </Label>
                    <InputGroup className="rounded-[5px] bg-[#F3F3F3] p-1.5 sm:p-1.75">
                        <InputGroup.Input
                            className="w-full text-sm sm:text-base"
                            type={isVisible ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                        />
                        <InputGroup.Suffix className="pr-0">
                            <Button
                                isIconOnly
                                aria-label={
                                    isVisible
                                        ? "Hide password"
                                        : "Show password"
                                }
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? (
                                    <FaEye className="size-4" />
                                ) : (
                                    <FaEyeSlash className="size-4" />
                                )}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                    <FieldError />
                </TextField>

                <Button
                    className="w-full bg-[#e35336] hover:bg-[#c7432a] text-white mt-1.5 py-3 sm:py-4 md:py-5 text-sm sm:text-base rounded-[5px]"
                    type="submit"
                >
                    Login
                </Button>
            </Form>

            <div className="px-2 sm:px-4 md:px-6 mt-4 sm:mt-5 space-y-4 sm:space-y-5">
                <p className="text-center text-sm sm:text-base">Or</p>
                <Button
                    onClick={() => handleGoogleLogin()}
                    variant="outline"
                    size="lg"
                    className="text-sm sm:text-base text-white border border-[#e35336] w-full hover:bg-[#c7432a] rounded-md"
                >
                    <FaGoogle />
                    Login with Google
                </Button>
            </div>

            <p className="text-center mt-5 sm:mt-6 md:mt-7 text-sm sm:text-base text-[#706F6F] font-semibold">
                Dont’t Have An Account ?{" "}
                <Link
                    href="/register"
                    className="bg-linear-to-r from-[#e35336] to-[#c7432a] bg-clip-text text-transparent hover:underline"
                >
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;
