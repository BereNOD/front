import React from 'react';
import ReactDOM from 'react-dom';
import './modalProfile.sass'

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal_overlay"/>
    <div className="modal_wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal_header">
          <button type="button" className="modal_close_button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p>
        ТЕСТОВОЕ ЕБОБО!
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
