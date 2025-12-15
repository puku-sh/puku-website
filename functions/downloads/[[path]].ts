export async function onRequest(context: any) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace('/downloads/', '');

  // Map file paths to R2 objects
  const fileMap: Record<string, string> = {
    'Puku-macOS-arm64.dmg': 'Puku-macOS-arm64.dmg',
  };

  const r2Key = fileMap[path];
  if (!r2Key) {
    return new Response('File not found', { status: 404 });
  }

  try {
    // Get file from R2 bucket
    const object = await env.PUKU_DOWNLOADS.get(r2Key);

    if (!object) {
      return new Response('File not found', { status: 404 });
    }

    return new Response(object.body, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${path}"`,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    return new Response('Error fetching file', { status: 500 });
  }
}
