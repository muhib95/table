
import { useState } from 'react';
import './App.css';

const dataTable=[
  {
    id:1,										 	
    first_name:'Lonnie',
    last_name:'O Connell',
    email:'loconnell0@hao123.com',
    gender:'Male',
    ip_address:'163.42.164.152',
    airport_code:'OGO',
    time:'7/10/2022',
    status:'TRUE',
    mobile:'707-462-9538',
    area:'9 Coleman Trail',
    show:'FALSE',
    edit:'FALSE'
  },
  {
    
    id:2,
    first_name:'Nikolos',
    last_name:'Botler',
    email:'nbotler1@wikipedia.org',
    gender:'Male',
    ip_address:'116.251.170.231',
    airport_code:'CBB',
    time:'12/25/2021',
    status:'FALSE',
    mobile:'240-316-9224',
    area:'6545 Waxwing Road',
    show:'FALSE',
    edit:'FALSE'
  },
 {
  											
    id:3,
    first_name:'Burgess',
    last_name:'Caddens',
    email:'bcaddens2@accuweather.com',
    gender:'Polygender',
    ip_address:'126.177.211.243',
    airport_code:'UKS',
    time:'2/24/2022',
    status:'FALSE',
    mobile:'435-749-4095',
    area:'49260 Golf Course Court',
    show:'FALSE',
    edit:'TRUE'
  },
  {
    									
    id:4,
    first_name:'Elissa',
    last_name:'Lesslie',
    email:'elesslie3@blog.com',
    gender:'Female',
    ip_address:'163.18.115.96',
    airport_code:'SFE',
    time:'3/13/2022',
    status:'FALSE',
    mobile:'877-992-0858',
    area:'65014 Gulseth Trail',
    show:'FALSE',
    edit:'FALSE'
  },
  {
   
    id:5,
    first_name:'Donaugh',
    last_name:'Nusche',
    email:'dnusche4@newsvine.com',
    gender:'Male',
    ip_address:'63.202.238.236',
    airport_code:'VAW',
    time:'6/2/2022',
    status:'TRUE',
    mobile:'419-777-9236',
    area:'047 Anzinger Terrace',
    show:'TRUE',
    edit:'FALSE'
  },
  {
   											
    id:6,
    first_name:'Guillaume',
    last_name:'Edgcumbe',
    email:'gedgcumbe5@ycombinator.com',
    gender:'Male',
    ip_address:'134.249.161.241',
    airport_code:'NOV',
    time:'11/24/2022',
    status:'TRUE',
    mobile:'100-187-2648',
    area:'262 Spohn Trail',
    show:'FALSE',
    edit:'FALSE'
  },
  {
    
    id:7,
    first_name:'Berti',
    last_name:'Coldbath',
    email:'bcoldbath6@un.org',
    gender:'Male',
    ip_address:'130.30.122.132',
    airport_code:'PHK	',
    time:'6/8/2022',
    status:'TRUE',
    mobile:'292-925-7639',
    area:'5167 Surrey Junction',
    show:'TRUE',
    edit:'TRUE'
  }
];

function App() {
const [ass,setAss]=useState([]);
const [assend,setAssend]=useState(false);
const [desend,setDesend]=useState(false);
const [main,setMain]=useState(true);

const optionChange=(e)=>{
  console.log(e);
  setAss([]);
  if(e.target.value==='1'){
    const a=dataTable.sort((a, b) => a.first_name.localeCompare(b.first_name))
    setDesend(false);
    setMain(false);
    setAssend(true);
    setAss(a);
    // console.log(a);
  }
  if(e.target.value==='2'){
    const a=dataTable.sort((a, b) => b.first_name.localeCompare(a.first_name))
    setAssend(false);
    setMain(false);
    setDesend(true);
    setAss(a);
    // console.log(a);
  }
  // if(e.target.value==='0'){
   
  //   setAssend(false);
  //   setDesend(false);
  //   setMain(true);
  //   setAss(dataTable);
  //   // console.log(a);
  // }
 else{
   
    setAssend(false);
    setDesend(false);
    setMain(true);
    setAss(dataTable);
    // console.log(a);
  }


 
 

}

console.log(ass);
console.log(assend);
console.log(desend);
  return (
    <div   className="overflow-x-auto text-white">
        {/* id:7,
    first_name:'Berti',
    last_name:'Coldbath',
    email:'bcoldbath6@un.org',
    gender:'Male',
    ip_address:'130.30.122.132',
    airport_code:'PHK	',
    time:'6/8/2022',
    status:'TRUE',
    mobile:'292-925-7639',
    area:'5167 Surrey Junction',
    show:'TRUE',
    edit:'TRUE' */}
     
    <table className="table table-compact w-full">
  <thead>
    <tr>
      <th>
      First Name
<select  onChange={e=>optionChange(e)}>

  <option defaultChecked='0' >unsort</option>
  <option value='1'>SORT BY ASC</option>
  <option value='2'>Sort BY DSC</option>
</select>
  
      </th>
      <th>last_name</th>
      <th>email</th>
      <th>gender</th>
      <th>ip_address</th>
      <th>airport_code</th>
      <th>time</th>
      <th>status</th>
      <th>mobile</th>
      <th>area</th>
      <th>show</th>
      <th>edit</th>
    </tr>
  </thead>
  <tbody>
{
  assend &&
  <>
     {
        ass.map(dataT=>  <tr key={dataT.id}>
          <td>{dataT.first_name}
 
          
          </td>
          <td>{dataT.last_name}</td>
          <td>{dataT.email}</td>
          <td>{dataT.gender}</td>
          <td>{dataT.ip_address}</td>
          <td>{dataT.airport_code}</td>
          <td>{dataT.time}</td>
          {
            dataT.status==='TRUE' ?
            <td className='bg-lime-500'>{dataT.status}</td>
            :
            <td className='bg-red-600'>{dataT.status}</td>
          }
          {/* <td>{dataT.status}</td> */}
          <td>{dataT.mobile}</td>
          <td>{dataT.area}</td>
          <td>{dataT.show}</td>
          <td>{dataT.edit}</td>
          
        </tr>)
      
    }
 
  </>

}
{
  desend &&
  <>
     {
        ass.map(dataT=>  <tr key={dataT.id}>
          <td>{dataT.first_name}
 
          
          </td>
          <td>{dataT.last_name}</td>
          <td>{dataT.email}</td>
          <td>{dataT.gender}</td>
          <td>{dataT.ip_address}</td>
          <td>{dataT.airport_code}</td>
          <td>{dataT.time}</td>
          {
            dataT.status==='TRUE' ?
            <td className='bg-lime-500'>{dataT.status}</td>
            :
            <td className='bg-red-600'>{dataT.status}</td>
          }
          {/* <td>{dataT.status}</td> */}
          <td>{dataT.mobile}</td>
          <td>{dataT.area}</td>
          <td>{dataT.show}</td>
          <td>{dataT.edit}</td>
          
        </tr>)
      
    }
 
  </>

}
    {
      main &&
      <>
      {
        dataTable.map(dataT=>  <tr key={dataT.id}>
          <td >{dataT.first_name}
          </td>
          <td>{dataT.last_name}</td>
          <td>{dataT.email}</td>
          <td>{dataT.gender}</td>
          <td>{dataT.ip_address}</td>
          <td>{dataT.airport_code}</td>
          <td>{dataT.time}</td>
          {
            dataT.status==='TRUE' ?
            <td className='bg-lime-500'>{dataT.status}</td>
            :
            <td className='bg-red-600'>{dataT.status}</td>
          }
          {/* <td>{dataT.status}</td> */}
          <td>{dataT.mobile}</td>
          <td>{dataT.area}</td>
          <td>{dataT.show}</td>
          <td>{dataT.edit}</td>
          
        </tr>)
      
    }
 
  
      </>
    }
       
    
  </tbody>
</table>
   
    </div>
  );
}

export default App;
