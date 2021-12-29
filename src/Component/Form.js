import React, {useState}  from 'react'
import './style.css'

 function Form() {
  const [inputs, setInputs] = useState({
    name:"",
    department:"",
    rating:""
  });

  const [output, setOutputs] = useState([])

  const handleChange = (event) => {
     setInputs({...inputs,[event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutputs([...output,{...inputs,id:output.length}])
    setSubmit(true)
}
const[Submit, setSubmit]=useState(false)
const back=()=>{
setSubmit(false)
}
return (
<div>
    <div>{Submit?null:
    <form onSubmit={handleSubmit}>
    <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
      <label className='text1'>Name:
      <input required className='box1' type="text" name="name" 
      value={inputs.name} onChange={handleChange}/>
      </label>
      <label className='text2'> Department:
        <input required className='box1' type="text" name="department"
         value={inputs.department} onChange={handleChange}/>
        </label>
        <label className='text3'>Rating:
      <input required className='box1' type="number" name="rating" 
      value={inputs.rating} onChange={handleChange}/>
      </label>
        <input  className='box2' type="submit" />
    </form>}
    </div>
    <div>{Submit?
    <div className='box4'>
      <h1 className='heading1'>EMPLOYEE FEEDBACK DATA</h1>
    { output.map( item =>(
    <h5 className='text4' key={item.id}> Name : {item.name} ; Department : {item.department} ; Rating : {item.rating} </h5>
    ))}
      {Submit?<input className='back' onClick={back} type="button" value="Go back"/>: null }
      </div>:null}
    </div>
    </div>
  )
}
export default Form

