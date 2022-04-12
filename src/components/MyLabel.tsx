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
    fontColor?:string
    

}

const MyLabel = ({label = 'no label', size = 'normal', allCaps=false, color = 'primary', fontColor}:IProps) => {
  return (
    <span  className={`${size} ${allCaps&&'upper'} text-${color} label`} style={{color:fontColor}}>
        {label}
    </span>
  )
}

export default MyLabel