import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars,words' });
        const paragraphSplit = new SplitText('.body p', { type: 'lines' });
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        })
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            delay: 0.5
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub:true
            }
        })
        .to('.right-leaf', {y:200},0)
        .to('.left-leaf', {y:-200},0)

    })
    return (
        <section id='hero' className='noisy'>
            <h1 className='title  font-quiche text-[60px] sm:text-[100px] md:text-[200px]'>NikxarJun</h1>
            <img className='left-leaf'
                src="./images/hero-left-leaf.png"
                alt="left-leaf" />

            <img className='right-leaf'
                src="./images/hero-right-leaf.png"
                alt="right-leaf" />
           <div className="body">
    <div className="content">
        <div className="space-y-5 hidden md:block">
            <p>Creative. Dynamic. Professional</p>
            <p className="subtitle">Crafting Stories <br /> Frame by Frame .
            </p>
        </div>
        <div className="view-cocktails">
            <p className="subtitle">
                I bring your ideas to life through seamless video editing, cinematic transitions, and stunning visuals. Every project is designed to captivate and engage your audience.
            </p>
        </div>
    </div>
</div>

        </section>


    )
}

export default Hero