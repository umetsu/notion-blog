require("dotenv").config({
  path: "packages/api/.env",
});

const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

(async () => {
  const response = await notion.databases.query({
    database_id: process.env.BLOG_DATABASE_ID,
  });

  for (const page of response.results) {
    console.log(page.properties);
  }
})();
