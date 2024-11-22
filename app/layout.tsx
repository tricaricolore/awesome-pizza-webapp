"use client";

import { store } from "@/store/store";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from "next/font/google";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
            <body className={inter.className}>
                <Provider store={store}>
                    <AppRouterCacheProvider>
                        {children}
                    </AppRouterCacheProvider>
                </Provider>
            </body>
        </html>
    );
}
