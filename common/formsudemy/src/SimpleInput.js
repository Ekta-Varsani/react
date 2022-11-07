import { useState } from 'react'

function SimpleInput() {

    const [enteredName, setEnteredName] = useState('');
    const [isInputValid, setIsInputValid] = useState(true)
    
    function inputHandler(event) {
        setEnteredName(event.target.value);
        if (event.target.value.trim() !== '') {
            setIsInputValid(true)
        }
    }

    function blurHandler() {
        if (enteredName.trim() == '') {
            setIsInputValid(false)
            return;
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        if (enteredName.trim() == '') {
            setIsInputValid(false)
            return;
        }
        setEnteredName('')
    }
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="row mt-3" >
                    <div className="col-4">
                        <label className="float-end" htmlFor="name">Name</label>
                    </div>
                    <div className="col-4">
                        <input value={enteredName} type="text" className="form-control" id="name" onChange={inputHandler} onBlur={blurHandler} 
                        />
                        {!isInputValid && <p className='text-danger'>Please enter name</p>}
                    </div>
                </div>
                <div className="row mt-3">
                    <button className="btn btn-primary">submit</button>
                </div>
            </form>
        </>
    )
}

export default SimpleInput