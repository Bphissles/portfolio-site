import sanityClient from "@sanity/client";

// HISLOP DESIGN BE
export default sanityClient({
  projectId: "e2cydsog", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // find this at sanity.json
  useCdn: true,
  apiVersion: "2021-10-21"
});