import { NextPage } from "next";
import { Coins } from "../../components";

const CryptoCurrencies: NextPage = () => {
    return (
        <>
            <main className="coins__cont">
                <Coins numberOfCoins={100} showLoadMore={false} />
            </main>
        </>
    );
};

export default CryptoCurrencies;
