import { FC } from "react";
import { Exchange as Props } from "./../typescript/Interfaces";
import Image from "next/image";
import millify from "millify";
import parse, { domToReact, htmlToDOM, Element } from "html-react-parser";

const Exchange: FC<Props> = ({
    description,
    iconUrl,
    id,
    marketShare,
    name,
    numberOfMarkets,
    rank,
    verified,
    volume,
    websiteUrl,
}) => {
    return (
        <article className="exchange">
            <header className="exchange__header exchange-grid">
                <div className="exchange__header-rank">
                    <div>
                        <p>{rank}.</p>
                        <figure>
                            <Image
                                alt=""
                                width={20}
                                height={18}
                                src={iconUrl}
                            />
                        </figure>
                    </div>
                    <p className="exchange__header-name">{name}</p>
                </div>
                <p>{millify(volume)}</p>
                <p>{millify(numberOfMarkets)}</p>
                <p>{Math.floor(marketShare)}</p>
            </header>
            <section className="exchange__description h-0">
                {parse(String(description))}
            </section>
        </article>
    );
};

export default Exchange;
