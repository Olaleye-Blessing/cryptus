import { FC } from "react";

import { Navbar } from "./../index";

const Index: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Index;
