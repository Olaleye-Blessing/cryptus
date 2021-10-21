import { FC } from "react";
import { News } from "../components";

const news: FC = () => {
    return (
        <>
            <main className="news-page">
                <News newsAmount={100} showLoadMore={false} />
            </main>
        </>
    );
};

export default news;
