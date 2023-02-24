import React, {useEffect, useState
} from "react"
import {Table, Container} from 'react-bootstrap';
import axios from "axios"
function FetchApi(){
    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get('https://kamulah-radio-api.onrender.com/programs')
        .then(res => {
            console.log(res)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return(
        // <div>
        //     {data.map((item) => (
               
        //         <div>
        //         {console.log(item.title)}
        //         <div>{item.title}</div>
        //         <div>{item.day}</div>
        //         <div>{item.startTime} {item.endTime}</div>
        //         </div>
    
        //     ))}
        // </div>
        <Container>
            <Table striped bordered hover>
        <thead>
          
          <tr>
          {data.map((item) => (
            <th>{item.day}</th>
            

            // <th>#</th>
            // <th>{item.title}</th>
            // <th>Day</th>
            // <th>Time</th>
            ))}
          </tr>
          
          
        </thead>
        
        <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.startTime} {item.endTime}</td>
            
          </tr>
           ))}
          {/* <tr>
            <td>{item.day}</td>
          </tr>
          <tr>
            <td>{item.startTime} {item.endTime}</td>
          </tr> */}
          
        
        </tbody>
       
      </Table>
        </Container>
    )
}
export default FetchApi