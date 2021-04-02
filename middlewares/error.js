const error = (error, req, res, next) => {
    const code = error.statusCode || 500
    const message =
        error.message || 'An unexpected error occured, please try again later'
    res.status(code).json({ message })
}

module.exports = error
