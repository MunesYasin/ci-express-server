module.exports=(req,res)=>{
    res.status(404).send({
        error : 404,
        massege :"PAth Not found"
    })
}