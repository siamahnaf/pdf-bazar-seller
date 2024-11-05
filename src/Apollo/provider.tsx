"use client"
import { PropsWithChildren } from "react";
import { HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from "cookies-next";


const makeClient = (cookie: string | undefined) => {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
        fetchOptions: { cache: "no-store" }
    });
    const token = getCookie("JYMXcZ3TpR81fbv2", { path: "/" });
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${cookie ?? token}`,
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
    })
}

export const Provider = ({ children, cookie }: PropsWithChildren<{ cookie: string | undefined }>) => {
    const initializeClientWithCookie = () => makeClient(cookie);
    return (
        <ApolloNextAppProvider makeClient={initializeClientWithCookie}>
            {children}
        </ApolloNextAppProvider>
    )
}