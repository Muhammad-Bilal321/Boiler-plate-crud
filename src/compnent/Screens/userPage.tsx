import { Box} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  let params = useParams();

  const [Data, setData] = useState<any>({});

  let getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
      .then((res : any) => {
        console.log(res.data);
        setData({ ...res.data });
      })
      .catch((err : any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    getData(); // yahan kuch call krsakty hn
  }, []); // [] bracket empty means getdata ka funtion page reload pr chaleyga ka for "useeffect"
         // or agr is [] bracket mai koi bhi function daidein tw jab woh function chaley tab getdata chley getdata dependence on is []bracket function
  return (
    <>    
    <Box>
    <h1 style={{textAlign:"center", fontFamily:"cursive"}}>YOUR COMMENT</h1>
    <div>
      <div style={{
        width:"80%",
        textTransform:"capitalize",
        borderRadius: "10px",
        margin: "2%",
        padding:"1%",
        boxShadow: "1px 1px 8px 1px grey",
        fontFamily:"cursive"
      }} className='comment' key={Data.id}>
        <h1>NAME: {Data.name}</h1>
        <h5>EMAIL: {Data.email}</h5>
        <p>{Data.body}</p>
      </div> 
    </div>
      
    </Box>
</>
  );
}
