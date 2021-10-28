import { ChangeEvent, FC, useState } from "react";
import Link from "next/link";
import { Cryptocurrency } from ".";
import { Cryptocurrency as ICrypto } from "../typescript/Interfaces";
import useFetch from "../hooks/useFetch";
import { coinRankingConfig } from "../services/coinRanking";

interface coins {
    numberOfCoins: number;
    showLoadMore: boolean;
}

const Coins: FC<coins> = ({ numberOfCoins, showLoadMore }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    let { data, loading, error } = useFetch(
        `/coins?limit=${numberOfCoins}`,
        coinRankingConfig
    );

    let coins: ICrypto[] = data?.data.coins;

    const handleFilter = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
    };

    if (coins && searchTerm) {
        let trimedSearchTerm: string = searchTerm.toLowerCase().trim();
        coins = coins.filter(
            (coin: ICrypto) =>
                coin.name.toLowerCase().includes(trimedSearchTerm) ||
                coin.symbol.toLowerCase().includes(trimedSearchTerm)
        );
    }

    return (
        <>
            <header
                className={`coins__header ${
                    showLoadMore ? "" : "flex-wrap space-y-5"
                }`}
            >
                <h2>Top {numberOfCoins} coins in the world</h2>
                {showLoadMore ? (
                    <Link href="/cryptocurrencies">
                        <a className="coins__header-loadMore">Load More</a>
                    </Link>
                ) : (
                    <form
                        className="coins__filter-form"
                        onSubmit={(e): void => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            value={searchTerm}
                            type="text"
                            className="coins__filter-input"
                            placeholder="filter cryptocurrencies"
                            onChange={handleFilter}
                        />
                    </form>
                )}
            </header>
            <section className="coins__section">
                {loading && <div>Loading....</div>}
                {error && <div>There is an error...</div>}
                {coins ? (
                    coins.length > 0 ? (
                        <ul className="coins__lists">
                            {coins.map((props: ICrypto) => {
                                return (
                                    <Cryptocurrency key={props.id} {...props} />
                                );
                            })}
                        </ul>
                    ) : (
                        <div>No result</div>
                    )
                ) : null}
            </section>
        </>
    );
};

export default Coins;
