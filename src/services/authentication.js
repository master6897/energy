import axios from "axios";

const authentication = async (username,password) => {
  try {
    const { data } = await axios.post('http://localhost:1337/auth/local', {
  identifier: username,
  password: password,
});
sessionStorage.setItem('credentials', JSON.stringify(data));
return data.user;
  } catch (err) {
    throw err;
  }
};


export {authentication};