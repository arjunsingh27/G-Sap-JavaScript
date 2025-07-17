import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { navLink } from '../../constants/index';

const Navbar = () => {

    useGSAP(() => {
        const navTeen = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })
        navTeen.from('nav',
            { backgroundColor: 'transparent',
            backgroundColor: '#0000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })


})
return (
    <nav>
        <a href="#home" className='flex items-center gap-2'>
            <p>Valvet Pour</p>
        </a>
        <ul>
            {navLink.map((link) => (
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
        </ul>
    </nav>
)
}

export default Navbar