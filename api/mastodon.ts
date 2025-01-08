const account = {
  instance: "mstdn.social",
  username: "morganlabs",
};

export const config = {
  runtime: "edge",
};

export default function handler(req: Request) {
  const params = new URL(req.url).searchParams;
  const searchInstance = params.get("instance") || "mstdn.social";
  const instance = `https://${searchInstance}/@${account.username}@${account.instance}`;
  return new Response(null, {
    status: 301,
    headers: {
      Location: instance,
    },
  });
}
