import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props ) => {
    return (
        <div className="container grow mx-auto p-6 sm:py-6">
            {children}
        </div>
    );
}

export default Container;