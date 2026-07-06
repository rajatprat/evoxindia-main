import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

async function handleRevalidate(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const expectedSecret = process.env.REVALIDATION_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ ok: false, message: 'Invalid revalidation secret.' }, { status: 401 });
  }

  const slug = request.nextUrl.searchParams.get('slug');

  revalidateTag('wordpress-posts');
  revalidatePath('/blog');
  revalidatePath('/sitemap.xml');

  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({
    ok: true,
    revalidated: slug ? ['/blog', `/blog/${slug}`, '/sitemap.xml'] : ['/blog', '/sitemap.xml'],
  });
}

export async function GET(request: NextRequest) {
  return handleRevalidate(request);
}

export async function POST(request: NextRequest) {
  return handleRevalidate(request);
}
