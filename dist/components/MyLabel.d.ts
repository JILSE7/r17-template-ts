/// <reference types="react" />
import './mylabel.css';
export interface IProps {
    /**
      * Mensaje que renderiza el componente
    */
    label: string;
    /**
      * Tamaño del boton
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
       * Capitalizado
     */
    allCaps: boolean;
    /**
       * Color de letra segun la clase
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
      * Color personalizado de la fuente
    */
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: IProps) => JSX.Element;
