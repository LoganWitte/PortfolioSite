import { useNavigate } from "react-router-dom"

export default function ErrorPage() {

    const navigate = useNavigate();

    return(
        <div className="errorOuterDiv">
            <div className="errorInnerDiv">
                <h1>You shouldn't be here!</h1>
                <button onClick={() => navigate("/")}>Return Home</button>
            </div>
            
        </div>
    )
}