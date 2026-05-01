"use client";
import { authClient } from "@/lib/auth-client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
            alert(error.message);
        }
        if (data) {
            alert("Login Successful");
        }
    };
    return (
        <div className="max-w-150 w-full mx-auto bg-linear-to-br from-[#1a1a3d] via-[#2f2f6f] to-[#272757] p-10 rounded-[5px]">
            <h2 className="text-[#C2B280] text-4xl text-center font-semibold mb-5">
                Login your account
            </h2>
            <Form className="flex flex-col gap-4 px-6 " onSubmit={onSubmit}>
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
                    <Label className="text-[#98a869] mb-3 text-xl font-semibold">
                        Email address
                    </Label>
                    <Input
                        className="rounded-[5px] bg-[#F3F3F3] p-4"
                        name="email"
                        placeholder="Enter your email address"
                    />
                    <FieldError />
                </TextField>

                <TextField className="w-full" name="password">
                    <Label className="text-[#98a869] mb-3 text-xl font-semibold">
                        Password
                    </Label>
                    <InputGroup className="rounded-[5px] bg-[#F3F3F3] p-1.75">
                        <InputGroup.Input
                            className="w-full"
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
                    className="w-full bg-[#e35336] hover:bg-[#c7432a] text-white mt-1.5 p-6 rounded-[5px]"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
            <p className="text-center mt-7.5 text-[#706F6F] font-semibold">
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
