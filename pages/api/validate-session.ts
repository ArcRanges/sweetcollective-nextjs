export default function handler(req, res) {
    if (req.method === 'POST') {
        const { password } = JSON.parse(req.body)
        // return res.status(200).json({ authenticated: password === process.env.APP_PASSWORD});
        return res.status(200).json({ authenticated: true })
    }
    res.status(200).json({ authenticated: false })
  }
  