import type { AppProps } from "next/app";
import "./../styles/index.scss";
import { Layout } from "./../components";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default MyApp;
