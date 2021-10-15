import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import {
    NewsArticle as Props,
    NewsArticleThumbnail,
} from "../typescript/Interfaces";
import noImage from "./../assests/svg/available.svg";
import { formatDate } from "../helpers/formatDate";

interface Provider {
    _type: string;
    name: string;
    image: {
        _type: string;
        thumbnail: NewsArticleThumbnail;
    };
}

const NewsArticle: FC<Props> = ({
    name,
    image,
    url,
    provider,
    datePublished,
    description,
}) => {
    let newsThumbnail = image?.thumbnail?.contentUrl;
    let newsProvider: Provider = provider[0];

    let {
        name: newsNameProvider,
        image: {
            thumbnail: { contentUrl },
        },
    } = newsProvider;

    // use default image if there is no thumbnail
    if (!newsThumbnail) {
        newsThumbnail = noImage;
    }

    // use default image if there is news provider has no image
    if (!contentUrl) {
        contentUrl = noImage;
    }

    return (
        <Link href={url}>
            <a className="news__link" target="_blank" rel="noopener ">
                <article className="news__article">
                    <header className="news__header">
                        <h3>{name}</h3>
                        <figure>
                            <Image
                                src={newsThumbnail}
                                width={50}
                                height={70}
                                alt={``}
                            />
                        </figure>
                    </header>
                    <p className="news__description">{description}</p>
                    <div className="news__provider">
                        <figure className="news__provider-logo">
                            <Image
                                alt={`${newsNameProvider} logo`}
                                src={contentUrl}
                                width={15}
                                height={15}
                            />
                        </figure>
                        <p className="news__provider-name">
                            {newsNameProvider}
                        </p>
                        <p className="news__provider-time">
                            {formatDate(datePublished)}
                        </p>
                    </div>
                </article>
            </a>
        </Link>
    );
};

export default NewsArticle;
