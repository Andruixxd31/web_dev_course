import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{ //Destructuring onInputChange
    return(
        <div>
            <p className = 'f3'>
                {'This magic brain will detect faces in yout pictures. Give it a try'}
            </p>
            <div className = 'center'>
                <div className = 'form center pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type = 'text' 
                    onChange={onInputChange}/>
                    <button className = 'w-30 grow link f4 ph3 pv2 dib white bg-light-purple'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;