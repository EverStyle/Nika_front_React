import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import './TextInput.scss'

export default function TextInput({ label, name, mask, minLen, maxLen, pattern }) {
   const [inputValue, setInputValue] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   function validate() {
      const len = inputValue.length;
      if (len == 0) {
         setErrorMessage('Заполните это поле');
         return;
      }
      if (minLen && len < minLen) {
         setErrorMessage(`Минимальная длина ${minLen} символа`);
         return;
      }
      if (maxLen && len > maxLen) {
         setErrorMessage(`Максимальная длина ${maxLen} символа`);
         return;
      }
      if (mask && inputValue.includes('_')) {
         setErrorMessage(`Ваш ввод должен соответствовать маске`);
         return;
      }
      if (pattern && !pattern.test(inputValue)) {
         setErrorMessage(`Введите корректное значение`);
         return;
      }

      setErrorMessage('');
   }



   return (
      <div className={'TextInput' + (errorMessage ? ' TextInput_error' : '')}>
         <label className="TextInput__label" htmlFor={name}>
            {label}
         </label>
         <InputMask
            className="TextInput__input"
            name={name}
            id={name}
            type="text"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            mask={mask ? mask : ''}
            onBlur={validate}
         />

         {errorMessage ? <div className="TextInput__errorMessage">{errorMessage}</div> : null}
      </div>
   )
}

