// controllers/skills.js
const Skill = require("../models/skill");
module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
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

function create(req, res) {
  const obj = JSON.parse(JSON.stringify(req.body));
  // console.log(obj)
  Skill.create(obj);
  res.redirect("skills");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function edit(req, res) {
  const id = req.params.id;
  // res.send(Skill.getOne(id))
  res.render("skills/edit", { title: "Skill Edit", skill: Skill.getOne(id) });
}

function update(req, res) {
  const obj = JSON.parse(JSON.stringify(req.body));
  const id = Number(req.params.id)
  obj.id = id;
  // res.send(obj);
  // console.log(obj);
  Skill.update(obj);
  res.redirect(`/skills/${id}`);
}
