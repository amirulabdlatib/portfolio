const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amirul.app";

export default function sitemap() {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
