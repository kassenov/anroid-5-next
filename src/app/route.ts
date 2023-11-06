import { redirect } from 'next/navigation';
 
export async function GET(request: Request) {
    redirect('https://www.google.com/');
    // Parse the user agent from the request headers
    const userAgent = request.headers.get('user-agent');
    // Check if the user agent contains "Chrome/39" or lower
    const isChrome39OrLower = /Chrome\/(?:0[0-9]|1[0-9]|2[0-9]|3[0-9])/.test(userAgent || "");

    if (isChrome39OrLower) {
      // Redirect to a specific page for older Chrome versions
      redirect('https://www.google.com/');
    } else {
    }
}