import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/schimal/', '/admin/', '/api/'],
      },
      {
        userAgent: 'GPTBot', 
        allow: '/',
      },
      {
        userAgent: 'AnthropicBot', 
        allow: '/',
      },
      {
        userAgent: 'CCBot', 
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', 
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', 
        allow: '/',
      },
      {
        userAgent: 'Amazon-Alexa', 
        allow: '/',
      },
             
      { userAgent: 'ChatGPT-User', allow: '/' },           
      { userAgent: 'Anthropic-ai', allow: '/' },           
      { userAgent: 'ClaudeBot', allow: '/' },               
      { userAgent: 'NeevaBot', allow: '/' },                
     
      { userAgent: 'Applebot', allow: '/' },              
      { userAgent: 'YouBot', allow: '/' },                 
      { userAgent: 'DuckDuckBot', allow: '/' },  


    ],
    sitemap: 'https://safety-doors.com/sitemap.xml',
  }
}
