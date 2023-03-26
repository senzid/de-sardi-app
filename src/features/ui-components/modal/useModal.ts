import { useState } from "react";
import { pokemonResponse } from "../../../types";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const [idContent,setIdContent] = useState<pokemonResponse>();

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const handleContent = (id:pokemonResponse) => {
    setIdContent(id)
  }
  return {
    isOpen,
    toggle,
    idContent,
    handleContent
  };
}
