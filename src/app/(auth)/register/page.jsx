import Register from "@/components/Auth/Register";

export const metadata = {
    title: "Tiles Gallery | Register",
    description: "Best website for tiles",
};

const RegisterPage = () => {
    return (
        <section className="container mx-auto mt-10 mb-20">
            <div className="px-4">
                <Register />
            </div>
        </section>
    );
};

export default RegisterPage;
