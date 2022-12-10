// src/pages/api/revalidate.ts
import { NextApiRequest, NextApiResponse } from 'next'

// Using On-Demand Revalidation
// https://vercel.com/docs/concepts/next.js/incremental-static-regeneration#using-on-demand-revalidation
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // revalidate path ex:) `/hoge/fuga`
  const path = req.query.path as string

  try {
    await res.revalidate(path)
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res
      .status(500)
      .send(`Error revalidating, ${(err as Error).toString()}`)
  }
}
