const signIn = (req,res) => {
    console.log(req.body)
    res.status(30).redirect('/')
};

module.exports = signIn ;