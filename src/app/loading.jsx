import { Spinner } from "@heroui/react";

const loading = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 h-screen">
            <Spinner size="xl" />
            <span className="text-xs text-muted">Loading...</span>
        </div>
    );
};

export default loading;
