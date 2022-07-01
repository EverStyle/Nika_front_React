import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import textInput from './TextInput.module.scss';
import { Link } from 'react-router-dom';


export default function TextInput({ label, name, mask, minLen, maxLen, pattern, className, helpText, helpLink, ...args }) {
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
      <div className={[textInput.textInput, (errorMessage ? textInput.error : null), (className || null),].join(' ')}>
         <label className={textInput.label} htmlFor={name}>
            {label}
         </label>
         {helpText ?
            <Link className={textInput.helpLink} to={helpLink}>
               {helpText}
            </Link>
            :
            null
         }
         <InputMask
            className={textInput.input}
            name={name}
            id={name}
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            mask={mask ? mask : ''}
            onBlur={validate}
            {...args}
         />

         {errorMessage ? <div className={textInput.errorMessage}>{errorMessage}</div> : null}
      </div>
   )
}

