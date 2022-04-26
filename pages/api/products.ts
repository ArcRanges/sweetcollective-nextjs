import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const entries = await client.getEntries({
        content_type: 'products'
      });

      res.status(200).json({
        items: entries?.items ?? []
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error })
    }
   
  }

  if (req.method === 'POST') {
    const { filters } = req.body;
    const tags = {};
    const filtersStr = filters?.tags?.join(',')

   if (filtersStr) {
     Object.assign(tags, {
      'fields.tags[in]': filtersStr
     })
   }
   
    try {
      const entries = await client.getEntries({
        content_type: 'products',
       ...tags
      });

      res.status(200).json({
        items: entries?.items ?? []
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error })
    }
  }
}