import { createHttpLink } from "@apollo/client";
import { registerApolloClient, ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";
import { cookies } from "next/headers";
import { setContext } from "@apollo/client/link/context";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
        fetchOptions: { cache: "no-store" }
    });
    const token = cookies().get("JYMXcZ3TpR81fbv2");
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token.value}` : "",
            },
        };
    });
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
        defaultOptions: {
            watchQuery: {
                errorPolicy: "all",
            },
            query: {
                errorPolicy: "all"
            }
        }
    });
})