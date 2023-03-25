import { SetStateAction, useState } from "react";
import { pokemonResponse } from "./types";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const [idContent,setIdContent] = useState<pokemonResponse>();

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const handleContent = (id:pokemonResponse) => {
    setIdContent(id)
  }
  // console.log(idContent)
  return {
    isOpen,
    toggle,
    idContent,
    handleContent
  };
}
