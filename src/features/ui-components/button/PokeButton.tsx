import React from 'react';
import { Button } from '@senzid/de-sardi-lib';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{

}

export const PokeButton: React.FC<ButtonProps> = (props) => {
  
  return <Button {...props}>{props.children}</Button>
}