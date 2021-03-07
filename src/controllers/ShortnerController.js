const ShortUrl = require('../models/shortUrl')

module.exports = {
  async index(req, res) {
    const shortUrls = await ShortUrl.find()
    // res.render('index', { shortUrls: shortUrls })

    res.status(200).json({ shortUrls: shortUrls })
  },
  async store(req, res) {
    const { fullurl } = req.body

    const response = await ShortUrl.create({ full: fullurl })

    res.status(200).json({ status: "Success", short: response.short })
  },
  async clickedLink(req, res) {
    const { url } = req.params

    const shortUrl = await ShortUrl.findOne({ short: url })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.status(200).json({ url: shortUrl.full })
    // res.redirect(shortUrl.full)
  },
  async getStats(req, res) {
    const { url } = req.params

    const shortUrl = await ShortUrl.findOne({ short: url })
    if (shortUrl == null) return res.sendStatus(404)

    res.status(200).json({ url: shortUrl.full, numClicks: shortUrl.clicks })
  },
}