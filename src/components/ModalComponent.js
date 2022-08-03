import React from 'react';

const ModalComponent = ({modal, modalCloseFn}) => {

  const onClickClose =(e)=>{
    e.preventDefault();
    modalCloseFn(); //부모컴포넌트함수실행호출
  }

  return (
    modal.isShow &&(
      <div id="modal">
         <div className="container">
           <ul>
             <li>
                <h2>알림메시지</h2>
                <button onClick={onClickClose} className="close-btn modal-close"><img src="./images/icon-close-button.webp" alt="close" /></button>
             </li>
             <li>
                <p className="modal-message">{modal.title}</p>
             </li>
           </ul>
           <div className='button-box'>
              <button onClick={onClickClose} className="ok-btn modal-close">확인</button>
           </div>
         </div> 
      </div>
    )
  );
};

export default ModalComponent;