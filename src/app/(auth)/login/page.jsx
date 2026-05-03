import Login from "@/components/Auth/Login";

export const metadata = {
    title: "Tiles Gallery | Login",
    description: "Best website for tiles",
};

const LoginPage = () => {
    return (
        <section className="container mx-auto mt-10 mb-20">
            <div className="px-4">
                <Login />
            </div>
        </section>
    );
};

export default LoginPage;
