import { MetadataRoute } from "next";


export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    return [
        {
            url:'https://new.safety-doors.com',
            lastModified:new Date(),
            changeFrequency:'monthly',
            priority:1,
        },
        {
            url:'https://new.safety-doors.com/about',
            lastModified:new Date(),
            changeFrequency:'monthly',
            priority:1
        },
        {
            url:'https://new.safety-doors.com',
            lastModified: new Date(),
            changeFrequency:'monthly',
            priority:1
        }
    ]
}