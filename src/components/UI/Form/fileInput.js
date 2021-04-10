import React, { useRef, useState } from 'react';
import "./fileInput.css"

const FileInput = (props) => {
    const inputRef = useRef();

    const [filename, setFilename] = useState('');

    const fileChangeHandler = e => {
        if (e.target.files[0]) {
            setFilename(e.target.files[0].name);
        } else {
            setFilename("");
        }
        props.onChange(e);
    };

    const activateInput = () => {
        inputRef.current.click();
    };

    return (
        <>
            <div className="FileInputWrapper">
                Image
                <div className="FileInputRow">
                    <input
                        type="file"
                        style={{ display: "none" }}
                        name={props.name}
                        className="inputNo"
                        onChange={fileChangeHandler}
                        ref={inputRef}
                    />
                    <input type="text"
                        readOnly
                        className="FileInput"
                        onClick={activateInput}
                        value={filename} />
                    <div>
                        <button type="button" className="browseButton" onClick={activateInput}>Browse</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileInput;
