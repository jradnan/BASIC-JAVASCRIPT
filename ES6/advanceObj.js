const student = {
    name: "Adnan",
    money: 5000,
    study: "Web Programming",
    subjects: ['wordpress', 'javascript', 'React', 'mongo', 'node', 'front end', 'full stack'],
    exam: function () {
        return this.name + 'participating in an exam'
    }
};


const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
const values = Object.values(bottle)
const entries = Object.entries(bottle);
// console.log(keys);
// console.log(values);

for(const element of entries){
    console.log(element);

}

