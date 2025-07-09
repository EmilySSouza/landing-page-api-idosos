import type { NextApiRequest, NextApiResponse } from 'next'

const API_BASE_URL = 'https://apiidosos.onrender.com'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { all } = req.query
  const path = Array.isArray(all) ? all.join('/') : all || ''

  try {
    const apiRes = await fetch(`${API_BASE_URL}/${path}`)
    
    if (!apiRes.ok) {
      throw new Error(`API responded with status ${apiRes.status}`)
    }

    const data = await apiRes.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('API Proxy Error:', error)
    res.status(500).json({ error: 'Failed to fetch from API' })
  }
}