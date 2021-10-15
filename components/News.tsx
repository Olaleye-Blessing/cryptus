import { FC } from "react";
import Link from "next/link";
import useSWR from "swr";
import { newsFetcher } from "../services/binfNews";
import { NewsArticle } from ".";
import { NewsArticle as NewsArticleProps } from "../typescript/Interfaces";

interface news {
    newsAmount: number;
    showLoadMore: boolean;
}

const News: FC<news> = ({ newsAmount, showLoadMore }) => {
    let { data, error }: any = useSWR(
        `/search?q=crypto&count=${newsAmount}&freshness=Day&textFormat=Raw&safeSearch=Off`,
        newsFetcher
    );

    let loading = !data && !error;

    let news = data?.value;

    return (
        <>
            <header
                className={`coins__header ${
                    showLoadMore ? "" : "flex-wrap space-y-5"
                }`}
            >
                <h2>Latest Crypto News</h2>
                {showLoadMore && (
                    <Link href="/news">
                        <a className="coins__header-loadMore">Load More</a>
                    </Link>
                )}
            </header>
            <section>
                {loading && <div>Loading...</div>}
                {error && <div>There is an error</div>}
                {news && (
                    <ul className="news">
                        {news.map((newsarticle: NewsArticleProps) => (
                            <li key={newsarticle.name} className="news__list">
                                <NewsArticle {...newsarticle} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
};

export default News;
