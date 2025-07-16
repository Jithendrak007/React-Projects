import sculptureList from './Data'
import { useState } from 'react';

const Template = () => {
    const [Index, setIndex] = useState(0);
    const [Show, setShow] = useState(true);

    function HandleNextClick() {
        if (sculptureList.length - 1 > Index) {
            setIndex(Index + 1);
        }
        else {
            setIndex(0);
        }
    }
    function HandlePreviousClick() {
        if (Index > 1) {
            setIndex(Index - 1);
        }
        else {
            setIndex(sculptureList.length - 1);
        }
    }
    function HandleShowDetailsClick() {
        setShow(!Show);
    }
    let sculpture = sculptureList[Index];
    return (
        <div>
            <button onClick={HandlePreviousClick}>Previous</button>

            <button onClick={HandleNextClick}>Next</button>
            <h2>{Show ? sculpture.description : ''}</h2>
            <h1>{Index + 1}/{sculptureList.length}</h1>
            <button onClick={HandleShowDetailsClick}>{Show ? "HideDetails" : "ShowDetails"}</button>
            <br></br>
            <img src={sculpture.url}></img>
        </div>

    )
}
export default Template;