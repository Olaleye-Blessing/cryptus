import { FC } from "react";
import { Nfts } from "../components";

const nfts: FC = () => {
    return (
        <>
            <main className="nfts-page">
                <Nfts numberOfNfts={50} showLoadMore={false} />
            </main>
        </>
    );
};

export default nfts;
