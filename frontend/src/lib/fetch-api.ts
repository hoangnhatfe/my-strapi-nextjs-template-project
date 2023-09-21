import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.STRAPI_API_KEY}`
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    // @ts-ignore
    const response = await fetch(requestUrl, mergedOptions)

    // Handle response
    if (!response.ok) {
      throw new Error(`An error occurred please try again`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.log("From try catch", error)
    if (error instanceof Error) {
      console.error(`An error occurred while fetching the API please check your server: ${error.message}`);
    } else {
      console.error(`An error occurred while fetching the API please check your server.`);
    }
    throw new Error("An error occurred while fetching the API please check your server.");
  }
}
