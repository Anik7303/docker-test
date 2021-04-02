const error404 = (req, res) => {
    const { url, method } = req
    const message = `route '${url}' for http '${method}' method not found`
    res.status(404).json({ message })
}

module.exports = error404
