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
        <div className="min-h-[90vh] flex items-center justify-center bg-[#1a1a3d] py-10">
            <div className="max-w-125 w-full mx-auto bg-linear-to-br from-[#1a1a3d] via-[#2f2f6f] to-[#272757] p-10 rounded-[5px]">
                <h2 className="text-[#C2B280] text-4xl text-center font-semibold mb-8">
                    Update Profile
                </h2>

                <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 px-6"
                >
                    <TextField className="w-full" name="name">
                        <Label className="text-[#98a869] mb-2 text-xl font-semibold">
                            Full Name
                        </Label>
                        <Input
                            className="rounded-[5px] bg-[#F3F3F3] p-4"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                        />
                    </TextField>

                    <TextField className="w-full" name="image">
                        <Label className="text-[#98a869] mb-2 text-xl font-semibold">
                            Profile Image URL
                        </Label>
                        <Input
                            type="url"
                            className="rounded-[5px] bg-[#F3F3F3] p-4"
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://example.com/your-image.jpg"
                        />
                    </TextField>

                    <Button
                        type="submit"
                        isDisabled={isSubmitting}
                        className="w-full bg-[#e35336] hover:bg-[#c7432a] text-white mt-4 p-6 rounded-[5px] text-xl"
                    >
                        {isSubmitting ? "Updating..." : "Update Information"}
                    </Button>
                </Form>

                {/* my-profile page button */}
                <div className="mt-6 text-center">
                    <Link
                        href="/my-profile"
                        className="bg-linear-to-r from-[#e35336] to-[#c7432a] bg-clip-text text-transparent hover:underline font-semibold"
                    >
                        ← Back to My Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
