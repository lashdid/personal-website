export async function loadProjects() {
  // Call an external API endpoint to get posts
  const serverUrl: string = process.env.NEXT_PUBLIC_URL!
  const env: string = process.env.NODE_ENV!
  const clean = "https://" + serverUrl.split("%2F")[2].toString().split("%3F")[0];
  const url = env === "development" ? serverUrl : clean
  const res = await fetch(url + "/api/projects");
  const data = await res.json();
  return data;
}
