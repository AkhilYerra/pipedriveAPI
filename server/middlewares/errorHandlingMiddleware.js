
function errorHandler(err, req, res, next){
    res.status(500)
    res.send('error', { error: err })
  }
