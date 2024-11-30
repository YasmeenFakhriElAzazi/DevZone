const user  = {
    id : 1 , 
    name : "Yasmeen Fakhri "
}

const  tasks = [
    {
        userId : 1 ,
        task : "DevZone Task" 
    } ,
    {
        userId : 1 , 
        task : "Chat Website Socket" 
    } ,
    {
        userId : 1 , 
        task : "Data Mining section" 
    } ,


]
//////////////// with callbacks 
// function getUser(userId , cb) {
//     setTimeout(() => {
//         if (user.id  === userId ){
//             cb(null  , user)
//         }else{
//             cb("User not found " , null )
//         }
//     }, 1000);
    
// }

// function getTasksByUserId(userId , cb) {
//     setTimeout(() => {
//         const userTasks = tasks.filter(task => task.userId === userId ) ;
//         if(userTasks.length > 0 ){
//             cb(null  , userTasks)
//         }else {
//             cb("Tasks not found for this user" , null )
//         }
//     }, 1000);
    
// }

// getUser(1, (error, userData) => {
//     if (error) {
//       console.error("Error fetching user:", error);
//     } else {
//       console.log("Fetched User:", userData);
//       getTasksByUserId(userData.id, (error, userTasks) => {
//         if (error) {
//           console.error("Error fetching tasks:", error);
//         } else {
//           console.log("Fetched Tasks:", userTasks);
//         }
//       });
//     }
//   });

///////////// with promices 

// function getUser(userId){
//     return new Promise((resolve , reject )=>{
//         setTimeout(() => {
//             if(user.id === userId){
//                 resolve(user)
//             }else{
//                 reject('User not found ')
//             }
//         }, 1000);
//     })
// }

// function getTasksById(userId){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             const userTasks  = tasks.filter(task  => task.userId === userId)
//             if (userTasks.length > 0 ){
//                 resolve(userTasks)
//             }else{
//                 reject("no Tasks for this user ")
//             }
//         }, 1000);
//     })
// }
  
// getUser(1)
// .then(userData => {
//     console.log("User fetched:", userData);
//     return getTasksById(userData.id); 
//   })
//   .then(userTasks => {
//     console.log("Tasks fetched:", userTasks);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


////////////////// using async await 
  function getUser(userId){
    return new Promise((resolve , reject )=>{
        setTimeout(() => {
            if(user.id === userId){
                resolve(user)
            }else{
                reject('User not found ')
            }
        }, 1000);
    })
}

function getTasksByUserId(userId){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            const userTasks  = tasks.filter(task  => task.userId === userId)
            if (userTasks.length > 0 ){
                resolve(userTasks)
            }else{
                reject("no Tasks for this user ")
            }
        }, 1000);
    })
}
  
async function fetchUserAndTasks(userId) {
    try {
        const userData = await getUser(userId) ;
        console.log("User fetched => " , userData);
        const userTasks = await getTasksByUserId(userData.id); 
        console.log("Tasks fetched:", userTasks);
    } catch (error) {
        console.error("Error:", error);
    }
}  

fetchUserAndTasks(1);
