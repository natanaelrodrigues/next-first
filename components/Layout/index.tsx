import { ReactElement } from "react";
import { NavBar } from "../NavBar";
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
            <NavBar />
            <main >
                {children}
            </main>
            <footer  className={styles.footer}>
                Todos os Direitos reservados.
            </footer>
        </div>
    );
}