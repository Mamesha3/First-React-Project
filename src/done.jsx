import { useState } from "react"
import Input from "./doneInp"

function Completed(props) {
    const [text, setText] = useState(Input)
    const [inpValue, setInpvalue] = useState("hi")
    let someExa = props.toggleBtn

    function changeText(e) {
      setInpvalue(e.target.value) 
    }
    
    function blurText(e) {
        if(e.key === "Enter") {
            setText(prev => ([
            ...prev,
            {
                Content: inpValue,
                btnEdTex: "Edit",
                btnDlTex: "Dlt",
                id: prev.length + 1
            }
            ]))
            updateEdi(e.target.id, inpValue)
        }
    }

    function blurTe() {
        setText(prev => ([
            ...prev,
            {
                Content: inpValue,
                btnEdTex: "Edit",
                btnDlTex: "Dlt",
                id: prev.length + 1
            }
        ]))
    }

    function deletIte(id) {
        setText(prev => 
            prev.filter(item => item.id !== id)
        )
    }

    function updateEdi(id, newText) {
        setText(prev => 
            prev.map(item => 
                item.id === id ? {...item, text: newText} : item
            )
        )
    }

    return (
        <div className="completed_task container">
           <div className="title">
             <h3>Completed</h3>
             <button
              id="add_task"
              onClick={props.toggleCondition}
              >+</button>
           </div>
            
            <div className="task_container">

             {
                text.map(item => {                    
                    return (
                      <div className="task" key={item.id}>
                         <p className="task_note">
                           {item.Content}            
                         </p>
                
                         <div className="buttons">

                           <button 
                           className="edit"
                           onClick={props.toggleCondition}
                           >{item.btnEdTex}</button>

                           <button 
                            className="dlt"
                            onClick={() => deletIte(item.id)}
                           >{item.btnDlTex}</button>

                         </div>
                     </div>
                    )
                })
             }

             {someExa ? <div className="input">
                <input
                  type="text"
                  name="some-text"
                  id="some_text" 
                  onChange={changeText}
                  onBlur={blurTe}
                  onKeyDown={blurText}
                />
             </div> : null}

           </div>
        </div>
    )
}

export default Completed