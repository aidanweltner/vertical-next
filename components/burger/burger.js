import styles from './burger.module.scss'

export default function Burger(/* { isOpen } */) {
  return (
    <div className={styles.burger/* , isOpen ? 'open' : ''  */} >
      <span/>
      <span/>
      <span/>
    </div>
  )
}