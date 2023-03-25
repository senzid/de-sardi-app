import React, { ReactNode } from "react";
import { Modal } from "@senzid/de-sardi-lib";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export function PokeModal(props: ModalType) {
  return ( <Modal isOpen={props.isOpen} toggle={props.toggle}>{props.children}</Modal>
  );
}
