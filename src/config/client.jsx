import { createClient } from "next-sanity";
  const config = {
      projectId: "6e3vetrh",
      dataset: "production",
      apiVersion: "2021-10-14",
      useCdn: false
  }
  
  export const Client = createClient(config);