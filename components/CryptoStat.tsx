import { FC } from "react";
import { IconType } from "react-icons";
import { CryptoStat as IProps, Stat } from "../typescript/Interfaces";

const CryptoStat: FC<IProps> = ({ title, statistics }) => {
  return (
    <section>
      <header>
        <h3>{title}</h3>
      </header>
      <ul>
        {statistics.map(
          (sta: Stat): JSX.Element => (
            <li key={sta.text} className="cryptoDetail__stats-list">
              {sta.link ? (
                sta.value && (
                  <a
                    href={sta.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cryptoDetail__stats-link"
                  >
                    <span className="cryptoDetail__stats-icon">
                      <sta.icon />
                    </span>
                    {sta.text}
                  </a>
                )
              ) : (
                <>
                  <span className="cryptoDetail__stats-icon">
                    <sta.icon />
                  </span>
                  <span>{sta.text}</span>
                  <span className="cryptoDetail__stats-value">{sta.value}</span>
                </>
              )}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default CryptoStat;
