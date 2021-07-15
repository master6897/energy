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

  const putUserToTask = async(taskId,value,headers) =>{
    try{
      const pull = (await axios.put(`http://localhost:1337/tasks?id=${taskId}`,value,headers));
      return pull;
    }catch(err){
      return err;
    }
  }

  export {putTask,getTasks,putUserToTask};