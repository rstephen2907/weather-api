require('../task_manager/src/db/mongoose');
const Task = require('../task_manager/src/models/tasks');

// Task.findByIdAndRemove('6172579d61a8852c9716718b').then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: false });
// }).then((count) => {
//     console.log('Number of tasks not completed:', count);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('617681e0e680b184205518d1').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
