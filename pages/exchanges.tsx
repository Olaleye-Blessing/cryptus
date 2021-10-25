import Head from "next/head";
import { FC } from "react";
import { Exchanges } from "../components";

const exchanges: FC = () => {
    return (
        <>
            <Head>
                <title>Exchanges | Cryptus</title>
                <meta
                    name="description"
                    content="Global list of crypto exchanges"
                />
                <meta
                    name="keywords"
                    content="exchanges, active exchanges, exchanges in the world"
                />
            </Head>
            <main className="exchanges-page">
                <Exchanges numberOfExchanges={100} showLoadMore={false} />
            </main>
        </>
    );
};

export default exchanges;
