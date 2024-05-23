import React, {useState} from 'react'


function Form(para) {
    const [text, setText] = useState('Enter text here');
    const [fontStyle, setFontStyle] = useState('normal');
    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        para.showAlert("Converted to Upper Case", "success");
    }

    const handleOnChange = (event)=> {
        // window.alert('On change'); 
        setText(event.target.value);
    }


    const ChangeFont = (props) => {
        setFontStyle((prevStyle) => {
          return prevStyle === 'normal' ? 'italic' : 'normal';
        });

        para.showAlert("Font style has been changed", "success");
    }
  return (
    
    <div className='container my-3'>
    <h2 style={{color: para.mode === 'dark' ? 'white' : 'black'}}>{para.heading}</h2>
    <div className="mb-3" >
    <textarea
          className="form-control"
          style={{ backgroundColor: para.mode === 'light' ? 'white' : 'grey' }}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          value={text}
        ></textarea>
    </div>

    <div className="container" >
      <div className="card my-4" style={{ backgroundColor: para.mode === 'light' ? 'white' : 'grey' }}>
        <div className="card-body" > 
          {text}
          <hr />
          <h6>{text.split(" ").length} words and {text.length} characters</h6>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
    </div>

    <div className="container">
      <div className="card my-4" style={{ backgroundColor: para.mode === 'light' ? 'white' : 'grey' }}>
        <div className="card-body" style={{ fontStyle: fontStyle }}> 
          {text}

        </div>
      </div>
      <button className="btn btn-primary" onClick={ChangeFont}>{fontStyle === 'normal' ? 'Change to Italic' : 'Change to Normal'}</button>
    </div>
  </div>
  )
}

export default Form