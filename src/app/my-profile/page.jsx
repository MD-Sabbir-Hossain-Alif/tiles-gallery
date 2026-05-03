import MyProfile from "@/components/Profile/MyProfile";

export const metadata = {
    title: "Tiles Gallery | My Profile",
    description: "Best website for tiles",
};

const MyProfilePage = () => {
    return (
        <div className="container mx-auto">
            <MyProfile />
        </div>
    );
};

export default MyProfilePage;
