import { FC } from "react";

interface Props {
    childrenClass: string;
}

const HomeContainer: FC<Props> = ({ children, childrenClass }) => {
    return (
        <section className={`${childrenClass}`}>
            <div className="home__section-cont">{children}</div>
        </section>
    );
};

export default HomeContainer;
