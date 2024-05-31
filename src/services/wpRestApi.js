import { apiUrl } from "../config";

export async function getAllDemos() {
  try {
    const response = await fetch(apiUrl + "demos");

    if (!response.ok) {
      console.error("Erreur de requête vers la route " + apiUrl + "demos");
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error(`Erreur de récupération des données. Endpoint : ${apiUrl}demos`, error);
  }
}

export async function getOneDemo(slug) {
  try {
    const response = await fetch(apiUrl + "demos/" + slug);

    if (!response.ok) {
      console.error("Erreur de requête vers la route " + apiUrl + "demos/" + slug);
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error(`Erreur de récupération des données. Endpoint : ${apiUrl}demos/${slug}`, error);
  }
}

export async function getAboutPage() {
  try {
    const response = await fetch(apiUrl + "page/about");

    if (!response.ok) {
      console.error("Erreur de requête vers la route " + apiUrl + "page/about");
    } else {
      const about = await response.json();
      return about;
    }
  } catch (error) {
    console.error(`Erreur de récupération des données. Endpoint : ${apiUrl}page/about`, error);
  }
}
