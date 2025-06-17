export const dynamic = 'force-static'; // ώστε να προδημιουργείται

export async function GET() {
  const baseUrl = 'https://geodora.gr';

  const pages = [
    '', // Αρχική
    'products',
    'synergasia',
    'epikoinonia',
    'about',
    'terms',
    'privacy'
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
