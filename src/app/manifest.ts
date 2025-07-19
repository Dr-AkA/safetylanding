import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Safety2',
    short_name: 'Safety',
    description: 'safety² ist die flexible, browser- und cloudbasierte EHS-Software, die sich nahtlos an Ihre Unternehmensanforderungen anpasst. Dank des modularen Aufbaus bestimmen Sie selbst, welche Funktionen Sie benötigen. Revisionssicher, normgerecht und stets auf dem neuesten Stand – für ein sicheres Arbeitsumfeld, das keine Kompromisse macht.',
    start_url: '/',
    display: 'standalone',
    background_color: '#2EC6FE',
    theme_color: '#8936FF',
    orientation:'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
      ,
      {
        src:"/assets/icon512_maskable.png",
        sizes:'any',
        type:'image'
      },
     {
        src:"/assets/icon512_rounded.png",
        sizes:'any',
        type:'image'
     }
    ],
  }
}