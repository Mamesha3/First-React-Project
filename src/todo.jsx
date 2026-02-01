import { useState } from "react"
import Input from "./todoInp"

function ToDo(props) {
    const [text, setText] = useState(Input)
    const [inpValue, setInpvalue] = useState("hi")
    
    function changeText(e) {
      setInpvalue(e.currentTarget.value)
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
   

    return (
        <div className="todo_task container">
           <div className="title">
             <h3>ToDo</h3>
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
                           >{item.btnDlTex}</button>

                         </div>
                     </div>
                    )
                })
             }

             {props.toggleBtn ? <div className="input">
                <input
                  type="text"
                  name="some-text"
                  id="some_text" 
                  onChange={changeText}
                  onBlur={blurTe}
                  onKeyDown={blurText}
                  value={inpValue}
                />
             </div> : null}

           </div>
        </div>
    )
}

export default ToDo