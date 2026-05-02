"use client";

import { useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import userAvatar from "@/assets/user.png";
import Link from "next/link";

const MyProfile = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex flex-col items-center justify-center gap-2 h-screen">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Loading...</span>
            </div>
        );
    }

    const user = session?.user;
    // console.log(user);

    return (
        <div className="flex justify-center items-center min-h-[90vh] ">
            <div className="max-w-md w-full mx-auto bg-[#2f2f6f] shadow-md rounded-xl p-8">
                <div className="flex flex-col items-center gap-6 mb-10">
                    <div className="relative">
                        {user?.image ? (
                            <Image
                                width={128}
                                height={128}
                                src={user?.image}
                                alt={user.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                            />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                                {userAvatar}
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <h2 className="text-[#C2B280] text-3xl font-semibold">
                            {user.name}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <p className="text-[#98a869] text-xl">Email</p>
                        <p className="text-gray-300 font-medium">
                            {user.email}
                        </p>
                    </div>
                    <div>
                        <p className="text-[#98a869] text-xl">Email Verified</p>
                        <p className="text-gray-300 font-medium">
                            {user.emailVerified ? "Yes" : "No"}
                        </p>
                    </div>
                    {user.createdAt && (
                        <div>
                            <p className="text-[#98a869] text-xl">
                                Member Since
                            </p>
                            <p className="text-gray-300 font-medium">
                                {new Date(user.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link href="/my-profile/update">
                        <button className="px-8 py-3 bg-[#e35336] hover:bg-[#c7432a] cursor-pointer font-medium rounded-lg transition-colors flex items-center gap-2">
                            Update Profile Information
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
