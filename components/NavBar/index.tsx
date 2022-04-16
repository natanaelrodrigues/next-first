import styles from './NavBar.module.css'
import {navigationLinks} from '../../utils/data';
import Link from 'next/link';


export const NavBar = () => {
    return (
        <ul className={styles.container}>
            {navigationLinks.map((link, index)=>(
                <li key={index} className={styles.linkItem}><Link href={link.path}>{link.label}</Link></li>
            ))}
        </ul>
    )
}