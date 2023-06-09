const router = require('express').Router();
const Login = require('../models/Login');

router.post('/add/register', (req, res)=>{
    const { name, email, password } = req.body
    const newLogin = new Login(req.body)

    // show in console that it works
    console.log(name)
    console.log(email)
    console.log(password)

    newLogin.save()
    .then(() => {
        console.log('Login added')
        res.redirect('/')
    })
    .catch((err) => {console.log(err)})
})

.get("/delete/register/:_id", (req, res) => {
    const { _id } = req.params;
    Login.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Login Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router
