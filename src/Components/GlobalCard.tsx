import styles from './GlobalCard.module.css'

export const GlobalCard = ({children}: any) => {
    return <div className={styles.globalBlur}>
        {children}
    </div>
}