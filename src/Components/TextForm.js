import React, {useState} from 'react'


export default function TextForm(Props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    Props.showalert("converted to uppercase","success");

setText(newtext)
  }
   const handlelowClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newtext = text.toLowerCase();
setText(newtext)
 Props.showalert("converted to lowercase","success");
  }
    const handleclearText = ()=>{
    
      let newtext = ' ';
setText(newtext)
 Props.showalert(" clear text","success");
 }
     const handlecopy = ()=>{
    let text = document.getElementById("myBox");
text.select();
    navigator.clipboard.writeText(text.value);
    Props.showalert("copy to clipboard","success");
     }
         const handlextraspces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    Props.showalert(" remove extra spaces","success");
     }



    const handleonchange = (event)=>{
    // console.log("uppercase was clicked");
setText(event.target.value)
  }
  const [text,setText] = useState('');
 
  return (
     <>
    <div>
      
       
<div className="mb-3 container1" style={{color: Props.mode==='dark' ? 'white': '#0427433'}}  >
  <h1>{Props.heading}</h1>
  <label htmlFor="myText" className="form-label">Enter your Text</label>
  
<div className="text-container" >
  {/* <button className='bold'>bold</button> */}
    <textarea className="form-control" onChange={handleonchange} id="myBox" rows="10" value={text} style={{backgroundColor: Props.mode==='light' ? 'white': 'grey',color:Props.mode==='dark' ? 'white': '#0427433',  }}></textarea>
</div>
 <button className='btn btn-primary my-4' onClick={handleUpClick}>convert to uppercase</button>
 <button className='btn btn-primary mx-2 my-4' onClick={handlelowClick}>convert to lowercase</button>
 <button className='btn btn-primary mx-2 my-4' onClick={handleclearText}>Clear text</button>
 <button className='btn btn-primary mx-2 my-4' onClick={handlecopy}>Copy text</button>
 <button className='btn btn-primary mx-2 my-4' onClick={handlextraspces}>remove extra spaces</button>
</div>
    </div>
    <div className="container" style={{color: Props.mode==='dark' ? 'white': '#0427433'}}>
      <h1>
        your text summary
      </h1>
<p>
  {
    text.trim().split(/\s+/).filter((element) => element.length !== 0).length
  } word and {
    text.replace(/\s/g, "").length
  } character
</p>


      <p>{0.008 * text.replace(/\s/g, "").length} minutes Read</p>

      <h2>preview</h2>
      <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>

    </div>
   </>
  )
}
