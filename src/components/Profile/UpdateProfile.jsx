"use client";

import { authClient } from "@/lib/auth-client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

import { Button, Form, Input, Label, Spinner, TextField } from "@heroui/react";
import Link from "next/link";

const UpdateProfile = () => {
    const { data: session, isPending, refetch } = useSession();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");

    if (isPending) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 h-screen">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Loading...</span>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { data } = await authClient.updateUser({
            name: name.trim(),
            image: image.trim(),
        });

        // console.log(data)

        if (data) {
            toast.success("Profile updated successfully!");
            await refetch();

            setTimeout(() => {
                router.push("/my-profile");
            }, 1500);
        } else {
            toast.error(error.message || "Failed to update profile");
        }
    };

    return (
        <div className="min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center bg-[#1a1a3d] py-6 sm:py-8 md:py-10 px-4">
            <div className="max-w-110 sm:max-w-130 md:max-w-150 w-full mx-auto bg-linear-to-br from-[#1a1a3d] via-[#2f2f6f] to-[#272757] p-5 sm:p-7 md:p-10 rounded-[5px]">
                <h2 className="text-[#C2B280] text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-5 sm:mb-6 md:mb-8">
                    Update Profile
                </h2>

                <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 md:px-6"
                >
                    <TextField className="w-full" name="name">
                        <Label className="text-[#98a869] mb-1 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold">
                            Full Name
                        </Label>
                        <Input
                            className="rounded-[5px] bg-[#F3F3F3] p-3 sm:p-4 text-sm sm:text-base"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                        />
                    </TextField>

                    <TextField className="w-full" name="image">
                        <Label className="text-[#98a869] mb-1 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold">
                            Profile Image URL
                        </Label>
                        <Input
                            type="url"
                            className="rounded-[5px] bg-[#F3F3F3] p-3 sm:p-4 text-sm sm:text-base"
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://example.com/your-image.jpg"
                        />
                    </TextField>

                    <Button
                        type="submit"
                        isDisabled={isSubmitting}
                        className="w-full bg-[#e35336] hover:bg-[#c7432a] text-white mt-3 sm:mt-4 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg rounded-[5px]"
                    >
                        {isSubmitting ? "Updating..." : "Update Information"}
                    </Button>
                </Form>

                {/* my-profile page button */}
                <div className="mt-4 sm:mt-5 md:mt-6 text-center">
                    <Link
                        href="/my-profile"
                        className="text-sm sm:text-base bg-linear-to-r from-[#e35336] to-[#c7432a] bg-clip-text text-transparent hover:underline font-semibold"
                    >
                        ← Back to My Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
