import React from 'react'
import { Triangle } from '../Helpers/Triangle'
import './stylesheets/HowMuch.css'
export const HowMuch = () => {
  return (
    <div className='howm-container'>
        <div className='howm-header-container'>
          <span className='howm-header-title'>El total fue de:</span>
          <div className='howm-header-price-container'>
              <span className='howm-header-price-sign'>$</span>
              <input type='number' className='howm-header-input' />
          </div>
        </div>



        <div className='howm-bottom-container'>
          
          <p className='howm-bottom-title'>
            Ahora necesitamos saber quienes son y cuanto pusieron
            </p>
   
          <span className='howm-bottom-text'>
            (Es importante que todos sean listados, incluso los que no pusieron dinero)
           
            </span>
            
        

          
          
            
        </div>

    </div>
  )
}
