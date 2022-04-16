import { ReactElement } from "react";
import styles from './Layout.module.css'

type Props = {
    children: ReactElement
};

export const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Meu projeto</h1>
            </header>
            <main >
                {children}
            </main>
            <footer  className={styles.footer}>
                Todos os Direitos reservados.
            </footer>
        </div>
    );
}