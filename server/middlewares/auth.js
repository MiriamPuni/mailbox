async function auth(req, res, next){
    try {
        req.body.user = {_id:'660d69c1e35d25ca26e61396'}
        next()
    } catch (error) {
        res.sendStatus(401)
    }
}
module.exports = {auth}