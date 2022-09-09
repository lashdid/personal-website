export async function loadProjects() {
  // Call an external API endpoint to get posts
  const serverUrl = process.env.NEXT_CMS_SERVER_URL
  const res = await fetch(serverUrl + "/api/projects");
  const data = await res.json();
  return data;
}
