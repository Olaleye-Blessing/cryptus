import { FC } from "react";
import { Exchanges } from "../components";

const exchanges: FC = () => {
    return (
        <>
            <main className="exchanges-page">
                <Exchanges numberOfExchanges={100} showLoadMore={false} />
            </main>
        </>
    );
};

export default exchanges;
