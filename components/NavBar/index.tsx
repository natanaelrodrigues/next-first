import styles from './NavBar.module.css'
import {navigationLinks} from '../../utils/data';
import Link from 'next/link';
import { useRouter } from 'next/router';


export const NavBar = () => {

    const router = useRouter();

    router.pathname

    return (
        <ul className={styles.container}>
            {navigationLinks.map((link, index)=>(
                <li key={index} className={[
                    styles.linkItem,
                    router.pathname === link.path ? styles.linkActive : null
                ].join(" ")}><Link href={link.path}>{link.label}</Link></li>
            ))}
        </ul>
    )
}