import axios from "axios";

const url = "http://localhost:3000";

const uploadImage = async (data) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${url}/images/add`,
      data: data,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export { uploadImage };
