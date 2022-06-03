import axios from "axios";

const imageUpload = async (data) => {
    try {
        let result = await axios({
            method: "POST",
            url: 'http://localhost:3000/add_product/single',
            data: data
        })
        console.log(result);
        console.log(err);
    } catch(err) {
    }
}

export default imageUpload;