const notFound = (req,res) => res.status(404).send(`<h1>404 Error Page Not Found</h1>`)

module.exports = notFound