import { useEffect, useState } from "react";
import Axios from "axios";

// const getData = (url) => {
//   let data;
//   Axios.get(url)
//   .then((res) => {
//     data = res.data
//     console.log(data)
//   })
//   .catch((err) => console.log(err));
  
//   if(data) console.log(data)
//   return data
// }
// export let url;

export const axios = Axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.data
  }
//   })
//   .catch((err) => console.log(err));

// const getData = async () => {
//   const data = await axios
//   console.log(data)
//   return data
// }
// const postData = (url,params) => {
//   let data;
//   Axios.post(url, params)
//     .then((response) => {
//       data =response.data
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return data
// }

// const Config = (url, type, params) => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     if (type == "GET")
//       Axios.get(url)
//         .then((res) => {
//           console.log(res.status);
//           return res.data;
//         })
//         .then((data) => setData(data))
//         .catch((err) => console.log(err));
//     else if (type == "POST")
//       Axios.post("https://jsonplaceholder.typicode.com/posts", params)
//         .then((response) => {
//           setData(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//   }, [url]);

//   return { data, setData };
// };

export {getData};
