import type { NextApiRequest, NextApiResponse } from 'next'

import { ChatGPTAPI } from 'chatgpt'

console.log('process.env', process.env)
console.log('process.env.CHAT_API_KEY',process.env.CHAT_API_KEY)
const api = new ChatGPTAPI({
  apiKey: process.env.CHAT_API_KEY!,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const search = req.query.s
    if (!search) {
      res.status(400).json({
        msg: 'param error'
      })
      return  
    }
    if (Array.isArray(search)) {
      res.status(400).json({
        msg: 'param error'
      })
      return 
    }
    const message = await api.sendMessage(search)
    return res.json(message.text)
  } catch (error) {
    console.log('error =>', error)
    return res.status(500).json({
      msg: 'time out'
    })
  }
}
