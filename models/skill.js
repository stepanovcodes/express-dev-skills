const skills = [
  { id: 1, name: "JavaScript", done: true },
  { id: 2, name: "HTML/CSS", done: true },
  { id: 3, name: "React", done: false },
  { id: 4, name: "Node.js", done: false },
  { id: 5, name: "Express.js", done: false },
  { id: 6, name: "SQL", done: false },
  { id: 7, name: "MongoDB", done: false },
  { id: 8, name: "Git/GitHub", done: true },
  { id: 9, name: "RESTful APIs", done: false },
  { id: 10, name: "Problem Solving", done: true },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return skills.find((skill) => skill.id === id);
}

function create(data) {
  // Add the id
  const newSkill = {...data}
  newSkill.id = Date.now() % 1000000;
  newSkill.done = data.done ? true : false ;
  skills.push(newSkill);
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function update(data) {
  // console.log(data);
  let index = skills.findIndex((s) => s.id === data.id);
  // console.log("current skill index", index);

  // updatedSkill = new object literal
  const updateData = { ...data };
  // if the incoming data.done is 'on' -> set the property to true, otherwise set it to false
  updateData.done = data.done === `on` ? true : false;

  let updatedSkill = { ...skills[index], ...updateData };
  console.log(updatedSkill)
  
  skills.splice(index, 1, updatedSkill);
}
