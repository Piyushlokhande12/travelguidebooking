import { useEffect, useState,Fragment} from "react";
import "./Baa.css"
// import {FallingLines } from "react-loader-spinner";
function Baat() {
const [inputData, setInputData] = useState("");
const [ans, setAns] = useState("");
const [questions, setQuestions] = useState([]);
const [answers, setAnswers] = useState([]);
const handlesubmit=async(e)=>{
 e.preventDefault()
 var obj={q:inputData}
 setQuestions((prevQuestions) => [...prevQuestions, inputData]);
 console.log("q",questions)
 setInputData("");
  var result =await fetch("http://localhost:8000/ask",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
            "Content-Type":"Application/json",
            }
          })
          result=await result.json();
setAnswers((prevResponses) => [...prevResponses, result.ans.text]);
console.log("a",answers)
          
 }

function getinput(e){
  setInputData(e.target.value)
}

 return (
 <div>
<h1 className="head">Ai Ask Anything About Cloud ....</h1>
<form onSubmit={handlesubmit}>
    <div className="outbox1">
{/* //....................................... */}

{questions.map((question, index) => (
  <Fragment key={index}>                
 <div>                 
 <div className="msg">                   
 <div className="logo">                      
 👤             
</div>                                          
<p>{question}</p>                      
</div>
</div>               

<div>                 
{answers.length > index && (                   
 <div className="msg">                     
<div className="logo">                       
🤖
</div>                      
<p>{answers[index]}</p>                     
</div>                   
   )}                 
   </div>               
   </Fragment>                                
   ))}           
      
  {/* //........................................ */}
    </div>
    <input className='search-bar' type="text" placeholder="ask me anything" value={inputData}  onChange={getinput}></input>
    <br></br>
    <hr></hr>
  <button  className="button" >send</button>
</form>
</div>
)
}
export default Baat;