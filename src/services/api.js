import axios from "axios";

const putTask = (title,description,num_employees) =>{
    try{
      const post = (axios.post(`http://localhost:1337/tasks`,{
          Title: title,
          Description: description,
          Num_employees: num_employees}
          ));
      return post;
    }catch(err){
      return err;
    }
  }

  const getTasks = async () =>{
    try{
      const response = (await axios.get(`http://localhost:1337/tasks`)).data;
      return response;
    }catch(err){
      return err;
    }
  }
  
  const getTasksById = async(taskId) =>{
    try{
      const response = (await axios.get(`http://localhost:1337/tasks?id=${taskId}`));
      return response;
    }catch(err){
      return err;
    }
  }
  const putUserToTask = async(taskId,usersTab) =>{
    try{
      const pull = (await axios.put(`http://localhost:1337/tasks/${taskId}`,{
        status: 1,
        users: usersTab
      }));
      return pull;
    }catch(err){
      return err;
    }
  }

  export {putTask,getTasks,putUserToTask,getTasksById};