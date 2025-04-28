import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const locale = request.cookies.get('locale')?.value || 'en';
  
  console.log('Middleware detected locale:', locale);
  
  const response = NextResponse.next();
  
  response.cookies.set('locale', locale, { 
    path: '/',
    maxAge: 31536000, 
    sameSite: 'lax'
  });
  
  response.headers.set('x-locale', locale);
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)', '/']
};