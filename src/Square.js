import {useState, useRef} from "react";
import axios from "axios";

export default function Square(){

    const rNum = useRef();
    const [num, setNum] = useState("");
    const [ans, setAns] = useState("");

    const hNum = (event) => {setNum(event.target.value);}

    const find = (event) =>{
        event.preventDefault();
        if(num == ""){
            alert("Empty Input");
            setAns("");
            rNum.current.focus();
            return;
        }
        let urladd = "http://localhost:5000/find"
        let data = {params:{number:num}}
        axios.get(urladd, data)
        .then(res => setAns(res.data.msg))
        .catch(err => setAns("Issue "+ err));
    }

    return(
        <>
        <center>
            <h1>Square Finder App</h1>
            <form onSubmit={find}>
                <input type="number" step="any" placeholder="Enter Number" onChange={hNum} value={num} ref={rNum}/>
                <br/><br/>
                <input type="submit" value="Find Square"/>
            </form>
            <h1>{ ans }</h1>
        </center>
        </>
    );
}