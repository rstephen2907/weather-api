require('../src/db/mongoose');
const User = require('../src/models/users');

// 6172549101ddb7f75f394b7f

// User.findByIdAndUpdate("617258981e7dc217610e02d7", {
//     age: 1
// }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }).then((count) => {
//     console.log(count);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('617258981e7dc217610e02d7', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});