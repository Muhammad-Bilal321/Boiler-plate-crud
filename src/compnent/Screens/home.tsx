import CPNavbar from '../CPnavbar'
import { useEffect, useState } from 'react';
import CPButton from '../CPbutton';
import CPTable from '../CPtable';
import { Get } from '../config/apimethod';

export default function Home() {
  const [listData , setlistData] = useState<any>([])
  let getData = () => {
    Get("posts")
      .then((res:any) => {
        setlistData([...res.data]);
      })
      .catch((err:any) => {
        console.log(err.message);
      });
  };
  
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <CPNavbar/>
      <CPButton label="SHOW TABLE" onClick={getData}/>
      <CPTable
        label="Testing data"
        cols={[
          {
            heading: "Id",
            key: "id",   // ya key woh hn jaha sey data arha hn us ka address 
          },
          {
            heading: "Name",
            key: "name",
          },
          {
            heading: "Email",
            key: "email",
          },
          {
            heading: "Body",
            key: "body",
          },
        ]}
        datasourse={listData}
      />
 
    </div>
  )
}
