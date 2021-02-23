import styles from '../styles/components/Profile.module.css'
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/IsadoraKarolaine.png" alt="Isadora" />
            <div>
                <strong>Isadora Karolaine</strong>
                <p>level 1</p>
            </div>
        </div>
    );
}