const { default: axios } = require("axios");

const getPeople = () => {
    axios.get('http://localhost:3000/people').then(res => {
        console.log(res.data);
    })
}

const getPersonById = (id) => {
    axios.get(`http://localhost:3000/people/${id}`).then(res => {
        console.log(res.data);
    })
}

const addPerson = (person) => {
    axios.post('http://localhost:3000/people', person).then(res => {
        console.log(res);
    })
}

//getPeople();
//getPersonById(1);
const p = {firstName: "James", lastName: "Plumb", age: 30};
addPerson(p);