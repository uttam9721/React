import { useState } from "react";

function User(props) {

   let [name,setName] =useState("Uttam"); //this is state variable

    let [age,setAge]=useState(29);
  function changeName(){
    setName(props.name);
     
  }

  function changeAge(){ 
    setAge(props.age);
  }

  function doSomething(planet){
    console.log()
  }

  return (
    <div className='user'>
        <h1>{name}</h1>
        <h1>{age}</h1>  

        <button onClick={changeName}>Change Name</button>
        <button onClick={changeAge}>Change Age</button>

        <button onClick={doSomething}>Do Something</button>
    </div>
  )
}
export default User;
