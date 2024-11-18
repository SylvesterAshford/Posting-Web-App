import React, { Component } from 'react';
import './index.css';
import ReactDom from 'react-dom';

export default function Modal({children, danger = false, setShowModal}) {
  let className = danger ? 'text-red' : 'text-blue';
  return (
    ReactDom.createPortal(
    <div className='modal-component'>
      <div className='modal-backdrop'>
        <div className={`modal ${className}`} style={{
          border : '4px solid',
          borderColor : danger ? 'red' : 'blue'
        }}>
          {children}
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>
    ,document.getElementById('modal'))
  )
}
