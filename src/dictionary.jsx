import { useState } from "react";

const dict = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const Dictionary = () => {
    const [input,setInput]=useState("")
    const [submit,setSubmit]= useState("")
    const onChange=(e)=>{
        setSubmit("")
        setInput(e.target.value)
        
    }
    const onClick=()=>{
        const search= dict.find((a)=>a.word==input)
       
        if (search) {
            console.log("entered if")
            setSubmit(search.meaning)
        }
        else{
            setSubmit("Word not found in the dictionary.")
        }
    
    }
  return <div>
    <h1>Dictionary App</h1>
    <div>
        <input type="text" placeholder="Search for a Word" onChange={onChange} />
        <button onClick={onClick}>Search</button>
    </div>
    <h3>Definition:</h3>
    <p>{submit}</p>
  </div>;
};

export default Dictionary;
