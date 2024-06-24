import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions} from "../store/counter";
import { privacyActions} from "../store/privacy";

const Controls=()=>{
  const dispatch=useDispatch();
  const inputElement=useRef();
  
  const handleIncrement=()=>{
    dispatch(counterActions.increment())
  }

  const handleDecerment=()=>{
    dispatch(counterActions.decrement())
  }

  const handleAddition=()=>{
    dispatch(counterActions.add(parseInt(inputElement.current.value)))
    inputElement.current.value=""
  }

  const handleSubtraction=()=>{
    dispatch(counterActions.subtract({num:parseInt(inputElement.current.value)}))
    inputElement.current.value=""
  }

  const handlePrivacyToggle=()=>{
    dispatch(privacyActions.toggle())
  }
  
  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={handleIncrement}>
      +1
      </button>
      <button type="button" className="btn btn-success" onClick={handleDecerment}>
      -1
      </button>
      <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>
      Privacy Toggle
      </button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
      <input type="text" placeholder="Enter a number" style={{overflow:"hidden"}} className="number-input" ref={inputElement}/>
      <button type="button" className="btn btn-info" onClick={handleDecerment} onClick={handleAddition}>
      Add
      </button>
      <button type="button" className="btn btn-danger" onClick={handleDecerment} onClick={handleSubtraction}>
      Subtract
      </button>
    </div>
    </>
  )
}

export default Controls;
