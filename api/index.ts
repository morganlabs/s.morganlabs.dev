const socialMedia: Record<string, string> = {
  mastodon: "https://mastodon.social/@morganlabs",
};

export function GET(_: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
