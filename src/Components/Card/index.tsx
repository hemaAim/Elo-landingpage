import styles from "./page.module.css";
import Image from "next/image";
export type CardProps = {
  title?: string
  children?: React.ReactNode
  img?: string
}

const Card = ({ title, children, img }: CardProps) => (
  <div className={styles.cards}>
 
<img 
src={img}
alt="" 
/> 
<div className={styles.titleAndDescription}> 
<h4>
{title}
</h4> 
<p>{children}</p>
</div>

</div> 
 
)

export default Card
