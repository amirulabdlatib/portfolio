import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amirul.app";

export const metadata = {
    metadataBase: new URL(siteUrl),

    alternates: {
        canonical: siteUrl,
    },

    title: "Amirul Abd Latib – Software Developer",
    description: "Software Developer specializing in Laravel and full-stack web development. Experienced in building modern web applications with secure APIs.",
    keywords: ["Software Developer", "Fullstack Developer", "Laravel Developer", "Web Developer Malaysia", "PHP Developer"],
    authors: [{ name: "Amirul Abd Latib" }],
    creator: "Amirul Abd Latib",
    applicationName: "Amirul Abd Latib Portfolio",

    icons: {
        icon: [
            { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/favicon/apple-touch-icon.png",
    },
    manifest: "/favicon/site.webmanifest",

    openGraph: {
        type: "website",
        locale: "en_MY",
        url: siteUrl,
        title: "Amirul Abd Latib – Software Developer",
        description: "Software Developer specializing in Laravel and full-stack web development. Experienced in building mod systems, secure APIs, and modern web applications.",
        siteName: "Amirul Abd Latib Portfolio",
    },

    twitter: {
        card: "summary_large_image",
        title: "Amirul Abd Latib – Software Developer",
        description: "Software Developer specializing in Laravel and full-stack web development. Experienced in building mod systems, secure APIs, and modern web applications.",
    },

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" enableSystem defaultTheme="system">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
