import type { AppProps } from "next/app";
import "./../styles/index.scss";
import { Layout } from "./../components";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
                shouldRetryOnError: false,
            }}
        >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}
export default MyApp;
