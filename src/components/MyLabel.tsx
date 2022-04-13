import './mylabel.css';

export interface IProps {
   /**
     * Mensaje que renderiza el componente
   */
    label: string,
     /**
       * Tamaño del boton
     */
    size: 'normal'|'h1'|'h2'|'h3',
    /**
       * Capitalizado
     */
    allCaps: boolean,
    /**
       * Color de letra segun la clase
     */
    color: 'primary'|'secondary'|'tertiary'
     /**
       * Color personalizado de la fuente
     */
    fontColor?:string,
    backgroundColor?: string
    

}

export const MyLabel = ({label = 'no label', size = 'normal', allCaps=false, color = 'primary', fontColor, backgroundColor = 'transparent'}:IProps) => {
  return (
    <span  className={`${size} ${allCaps&&'upper'} text-${color} label`} style={{color:fontColor, backgroundColor}}>
        {label}
    </span>
  )
}

