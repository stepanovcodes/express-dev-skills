// controllers/skills.js
const Skill = require("../models/skill");
module.exports = {
  index,
  show,
  new: newSkill,
  create
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
  });
}

function newSkill(req, res) {
  res.render("skills/new", {
    title: "New Skill",
  });
}

function create (req, res) {
  const obj = JSON.parse(JSON.stringify(req.body)); 
  // console.log(obj)
  Skill.create(obj);
  res.redirect("skills");
}
