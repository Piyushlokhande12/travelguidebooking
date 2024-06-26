import axios from 'axios'
import dayjs from 'dayjs'
import {toast} from 'react-toastify'
export const api = axios.create({
  baseURL: "http://localhost:8000/api"
})


export const getAllProperties = async() => {
  try{

      const response = await api.get("/place/allplace", {timeout: 10 * 1000,
      });

      if (response.status === 400 || response.status === 500){
        throw response.data
      }
      return response.data
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async( id) => {
  try{

    const response = await api.get(`/place/${id}`, {timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500){
      throw response.data
    }
    return response.data
} catch (error) {
  toast.error("Something went wrong");
  throw error;
}
}

export const createUser = async (email) => {
  try {
     await api.post("/user/register",{email});
  } catch (error) {
     toast.error("you are already logged in");
    throw error;
  }
};


// ................................................
export const getguide = async( id) => {
  try{

    const response = await api.get(`/guide/${id}`, {timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500){
      throw response.data
    }
    return response.data
} catch (error) {
  toast.error("Something wrong");
  throw error;
}
}