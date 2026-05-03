import UpdateProfile from "@/components/Profile/UpdateProfile";
import React from "react";

export const metadata = {
    title: "Tiles Gallery | Update Profile",
    description: "Best website for tiles",
};

const page = () => {
    return (
        <div className="container mx-auto">
            <UpdateProfile />
        </div>
    );
};

export default page;
