const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amirul.app";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/resume.pdf"],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
