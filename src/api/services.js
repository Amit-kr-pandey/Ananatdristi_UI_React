import axios from "axios";

const setstrvices = () => {
}

const postSubmitHandler = async (baseURLForSave = "", object={}) => {
  if (baseURLForSave !== "") {
    return await axios.post(baseURLForSave, object).then((response) => {
      return Promise.resolve(object.message)
    }).catch(error => {
      return Promise.reject("error === " + error)
      // alert("error===" + error);
    });
  }
}

const editSubmitHandler = (baseURLForEdit = "", object = {}) => {
  //console.log(object);
  axios.put(baseURLForEdit, object).then((response) => {
    alert("Record " + object.id + " updated!");
    //console.log(response);
  }).catch(error => {
    alert("Error Ocurred updating employee:" + error);
  });
}

async function getAllHandler (baseURLForGetAll = "") {
  const res = await fetch(baseURLForGetAll , { method: "GET", mode: "cors" });
  const result = await res.json();
  return result;
  
  // result.error ? alert("Error Ocurred while loading data: " +result.error) : callback(result);
  // return await axios.get(baseURLForGetAll).then((response) =>  
  //    response.data
  // ).catch(error => {
  //   alert("Error Ocurred while loading data:" + error);
  // });
}

const removeByIdHandler = (baseURLForRemoveById = "", id) => {
  axios.delete(baseURLForRemoveById + '/' + id).then((response) => {
    alert("Record " + id + " deleted!");
   // console.log(response.data);
    return response.data;
  }).catch(error => {
    alert("Error Ocurred in remove:" + error);
  });
}

const removeAllEmployee = (baseURLForRemoveAllEmployee = "") => {
  axios.delete(baseURLForRemoveAllEmployee).then((response) => {
    alert("All Recods deleted!");
   // setEmployeeData();
  }).catch(error => {
    alert("Error Ocurred in remove:" + error);
  });
}

export { postSubmitHandler, setstrvices, editSubmitHandler, removeByIdHandler, getAllHandler,removeAllEmployee };