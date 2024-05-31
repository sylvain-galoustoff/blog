import { apiUrl } from "../config";

export async function loadData() {
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
