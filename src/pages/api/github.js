export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const requestURL = searchParams.get("url");

  if (!requestURL) {
    return new Response(JSON.stringify({ error: "Missing url parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const headers = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
  }

  const result = await fetch(requestURL, { headers });
  return new Response(result.body, {
    status: result.status,
    headers: { "Content-Type": "application/json" },
  });
}
