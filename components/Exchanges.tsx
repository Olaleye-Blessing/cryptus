import { FC, MouseEvent, useRef } from "react";
import { cryptoFetcher } from "../services/coinRanking";
import Link from "next/link";
import { Exchange } from ".";
import { Exchange as ExchangeProps } from "./../typescript/Interfaces";
import useFetch from "../hooks/useFetch";

interface exchanges {
    numberOfExchanges: number;
    showLoadMore: boolean;
}

const Exchanges: FC<exchanges> = ({ numberOfExchanges, showLoadMore }) => {
    const exchangesRef = useRef<HTMLUListElement>(null);

    const handleShowDetail = (e: MouseEvent<HTMLUListElement>): void => {
        let target = (e.target as Element).closest("li");

        // stop if non of the exchanges is clicked
        if (!target) return;

        let allExchanges = e.currentTarget.querySelectorAll("li");

        for (let exchange of allExchanges) {
            let description = exchange.querySelector("section");

            // toggle show class if the current clicked element has show class. otherwise, remove
            if (target === exchange) {
                description?.classList.toggle("show");
            } else {
                description?.classList.remove("show");
            }
        }
    };

    let { data, error, loading } = useFetch(
        `/exchanges?limit=${numberOfExchanges}`,
        cryptoFetcher
    );

    let exchanges = data?.data?.exchanges;

    return (
        <>
            <header
                className={`exchanges__header ${
                    showLoadMore ? "" : "flex-wrap space-y-5"
                }`}
            >
                <h2>Top {numberOfExchanges} exchanges </h2>
                {showLoadMore && (
                    <Link href="/news">
                        <a className="exchanges__header-loadMore">Load More</a>
                    </Link>
                )}
            </header>
            <section>
                {loading && <div>Loading...</div>}
                {error && <div>There is an error</div>}
                {exchanges && (
                    <ul
                        ref={exchangesRef}
                        className="exchanges"
                        onClick={handleShowDetail}
                    >
                        <header className="exchanges__header exchange-grid">
                            <p>Exchanges</p>
                            <p>24h Trade Volume</p>
                            <p>Markets</p>
                            <p>Market Share</p>
                        </header>
                        {exchanges.map((exchange: ExchangeProps) => (
                            <li key={exchange.id} className="exchange__cont">
                                <Exchange {...exchange} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
};

export default Exchanges;
