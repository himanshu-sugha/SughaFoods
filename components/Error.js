
import { useAsyncError } from "react-router-dom"
const Error =()=>{
    return(<div><h1>Oops!</h1>
    <h2> Something Went Wrong....</h2>
    {error.status}
    </div>)

    }
export default Error;