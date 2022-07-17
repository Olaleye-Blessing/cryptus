import { FC } from "react";
import Link from "next/link";
import { NewsArticle } from ".";
import { NewsArticle as NewsArticleProps } from "../typescript/Interfaces";
import useFetch from "../hooks/useFetch";
import { bingNewsConfig } from "../services/binfNews";

interface news {
  newsAmount: number;
  showLoadMore: boolean;
}

const News: FC<news> = ({ newsAmount, showLoadMore }) => {
  let { data, loading, error } = useFetch(
    `/search?q=crypto&count=${newsAmount}&freshness=Day&textFormat=Raw&safeSearch=Off`,
    bingNewsConfig
  );

  let news = data?.value;

  return (
    <>
      <header
        className={`news__header-main ${
          showLoadMore ? "" : "flex-wrap space-y-5"
        }`}
      >
        <h2>Latest Crypto News</h2>
        {showLoadMore && (
          <Link href="/news">
            <a className="news__header-main-loadMore">Load More</a>
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
