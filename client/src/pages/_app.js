import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import Layout from "@/components/layout/Layout";

export default function App({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Layout>
                <Component {...props.pageProps} />
            </Layout>
        </Provider>
    );
}
