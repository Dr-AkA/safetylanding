import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const excludedPaths = ['/schimal', '/admin', '/api', '/dashboard'];
    
    return [
        {
            url: 'https://new.safety-doors.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://new.safety-doors.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
       
    ];
}