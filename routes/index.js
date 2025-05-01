const express = require("express");
const router = express.Router();

const content = {
    name: 'Priyanka',
    email: 'priyanka@gmail.com',
    phone: '6784532133',
    projects: [
        { title: "E-Commerce", description: "An online shopping website built with React and Node.js." },
        { title: "Portfolio Website", description: "A personal portfolio website to show projects and skills." }
    ],
    skills:["Html","Css","Java script"]
};
router.get("/", (req, res) => { 
    res.render("pages/home", { name:content.name }); 
});
router.get("/about",(req,res)=>
{
    res.render("pages/about",{skills:content.skills});
})
router.get("/project",(req,res)=>
{
    res.render("pages/projects",{projects:content.projects});
})
router.get("/contact",(req,res)=>
{
    res.render("pages/contact",{email:content.email,phone:content.phone})
})
module.exports = router;