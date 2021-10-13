import { ChangeEvent, FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { cryptoFetcher } from "../services/coinRanking";
import millify from "millify";
import { Cryptocurrency } from ".";
import { Cryptocurrency as ICrypto } from "../typescript/Interfaces";

interface coins {
    numberOfCoins: number;
    showLoadMore: boolean;
}

const Coins: FC<coins> = ({ numberOfCoins, showLoadMore }) => {
    let { data, error } = useSWR<any>(
        `/coins?limit=${numberOfCoins}`,
        cryptoFetcher
    );

    const [searchTerm, setSearchTerm] = useState<string>("");

    let loading = !data && !error;

    let coins = data?.data.coins;

    const handleFilter = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
    };

    if (coins && searchTerm) {
        coins = coins.filter((coin: any) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
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
