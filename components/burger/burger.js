import styles from './Burger.module.scss'

export default function Burger({ open }) {
  const isExpanded = open;

  return (
    <>
      <button
        className={styles.burger}
        aria-label="Menu Toggle"
        aria-expanded={isExpanded}
      >
        <span/>
        <span/>
        <span/>
      </button>
    </>
  )
}