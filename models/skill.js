const skills = [
    { id: 1, name: 'JavaScript', done: true },
    { id: 2, name: 'HTML/CSS', done: true  },
    { id: 3, name: 'React', done: false  },
    { id: 4, name: 'Node.js', done: false  },
    { id: 5, name: 'Express.js', done: false  },
    { id: 6, name: 'SQL', done: false  },
    { id: 7, name: 'MongoDB', done: false  },
    { id: 8, name: 'Git/GitHub', done: true  },
    { id: 9, name: 'RESTful APIs', done: false  },
    { id: 10, name: 'Problem Solving', done: true  }
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
  