import React, { ReactNode } from "react";
import './CustModal.css'

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export function CustModal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
