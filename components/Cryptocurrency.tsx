import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cryptocurrency as Iprops } from "../typescript/Interfaces";
import millify from "millify";

const Cryptocurrency: FC<Iprops> = ({
  id,
  uuid,
  rank,
  name,
  iconUrl,
  volume,
  marketCap,
  price,
  "24hVolume": _24hVolume,
}) => {
  return (
    <li className={`coins__list`}>
      <article>
        <Link href={`/cryptocurrencies/${uuid}`}>
          <a>
            <header className="coins__list-header">
              <h3>
                {rank}. {name}
              </h3>
              <figure className="coins__list-fig">
                <Image
                  src={iconUrl}
                  alt={`${name} svg`}
                  width={20}
                  height={20}
                  className="coins__list-img"
                />
              </figure>
            </header>
            <section className="coins__list-sec">
              <p>
                Price: <span>{millify(price)}</span>
              </p>
              <p>
                Volume: <span>{millify(_24hVolume)}</span>
              </p>
              <p>
                Market Cap: <span>{millify(marketCap)}</span>
              </p>
            </section>
          </a>
        </Link>
      </article>
    </li>
  );
};

export default Cryptocurrency;
