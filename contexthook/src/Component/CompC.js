import { Data } from "./CompA";
import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CompC() {
    const context = useContext(Data)
    function clickHandler() {
        toast.info("Wow so easy!", 
        // {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        // }
        );

    }
    return (
        <>
            <h1>Hello user {context}</h1>
            <button onClick={clickHandler}>click</button>
            
        </>
    )
}

export default CompC;