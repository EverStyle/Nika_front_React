import React, { useState, useRef } from 'react'
import './FileInput.scss'

//fileInput.current.files[0].name

export default function FileInput({ name }) {

   const [file, setFile] = useState(null);
   const inputElement = useRef(null);

   return (
      <div className="FileInput">
         <div className="FileInput__hint">Загрузите реквизиты (файл в формате .PDF, размер не более 2 Мб.)</div>
         {file ?
            <div className="FileInput__file">
               {`${file.name} (${(file.size / 1024 / 1024).toFixed(1)} Мб.)`}
               <span className="FileInput__remove" onClick={() => { setFile(null); inputElement.current.value = ''; }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.382525 0.382524C0.892557 -0.127508 1.71948 -0.127508 2.22952 0.382524L9.61748 7.77049C10.1275 8.28052 10.1275 9.10744 9.61748 9.61748C9.10744 10.1275 8.28052 10.1275 7.77049 9.61748L0.382525 2.22951C-0.127507 1.71948 -0.127508 0.892556 0.382525 0.382524Z" fill="#1F3948" />
                     <path d="M9.61748 0.382524C10.1275 0.892557 10.1275 1.71948 9.61748 2.22951L2.22951 9.61748C1.71948 10.1275 0.892556 10.1275 0.382524 9.61748C-0.127508 9.10744 -0.127508 8.28052 0.382524 7.77049L7.77049 0.382524C8.28052 -0.127508 9.10744 -0.127508 9.61748 0.382524Z" fill="#1F3948" />
                  </svg>
               </span>
            </div>
            :
            <label className="FileInput__label" htmlFor={name}>
               Выбрать файл
            </label>
         }

         <input
            className="FileInput__input"
            type="file"
            name={name}
            id={name}
            ref={inputElement}
            onChange={(event) => setFile(event.target.files[0])}
         />
      </div>
   )
}
