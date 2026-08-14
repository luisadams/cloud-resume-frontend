const API_URL = "https://luisresumeapi-ffbcfmcgengegebb.eastus-01.azurewebsites.net/api/visitorcounter";

async function updateVisitorCount() {
  const counterElement = document.getElementById("visitor-count");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const data = await response.json();
    counterElement.textContent = `Visitor count: ${data.count}`;
  } catch (error) {
    console.error("Failed to fetch visitor count:", error);
    counterElement.textContent = "Visitor count: unavailable";
  }
}

updateVisitorCount();
