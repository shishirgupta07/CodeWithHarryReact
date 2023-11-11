import React ,{useState} from 'react'

export default function TextForm(props) {
  const onChange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const ConvertUpCase = (event)=>{
    const newText = text.toUpperCase();
    setText(newText);
    console.log("uppper case")
  }
  const [text,setText] = useState("Enter text here");
  return (
    <div>
        <div className="mb-3">  
            <label for="myBox" className="form-label"> 
                <h1>
                {props.heading}
                </h1>
            </label>
            <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="8"></textarea>
            <button className='btn btn-primary' onClick={ConvertUpCase}>convert to upper case</button>
        </div>
    </div>
  )
}
