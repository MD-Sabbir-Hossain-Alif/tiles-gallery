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
        <section className="flex justify-center items-center min-h-[80vh] md:min-h-[90vh] px-4">
            <div className="max-w-md w-full mx-auto bg-black/10 backdrop-blur-lg border border-[#c2b28083] shadow-md rounded-xl p-5 sm:p-6 md:p-8">
                <div className="flex flex-col items-center border border-[#c2b28041] p-2 sm:p-3 md:p-4 rounded-lg gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                    <div className="relative">
                        {user?.image ? (
                            <Image
                                width={128}
                                height={128}
                                src={user?.image}
                                alt={user.name}
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#98a869]"
                            />
                        ) : (
                            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center">
                                {userAvatar}
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <h2 className="text-[#C2B280] text-xl sm:text-2xl md:text-3xl font-semibold">
                            {user.name}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm border border-[#c2b28041] p-2 sm:p-3 md:p-4 rounded-lg">
                    <div>
                        <p className="text-[#98a869] text-base sm:text-lg md:text-xl">
                            Email
                        </p>
                        <p className="text-gray-300 font-medium wrap-break-words">
                            {user.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-[#98a869] text-base sm:text-lg md:text-xl">
                            Email Verified
                        </p>
                        <p className="text-gray-300 font-medium">
                            {user.emailVerified ? "Yes" : "No"}
                        </p>
                    </div>

                    {user.createdAt && (
                        <div>
                            <p className="text-[#98a869] text-base sm:text-lg md:text-xl">
                                Member Since
                            </p>
                            <p className="text-gray-300 font-medium">
                                {new Date(user.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
                    <Link href="/my-profile/update">
                        <button className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-[#e35336] hover:bg-[#c7432a] cursor-pointer font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                            Update Profile Information
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;
