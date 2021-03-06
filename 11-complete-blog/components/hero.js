import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="" alt="An image showing me" width height />
            </div>
            <h1>Hi, I'm Jon</h1>
            <p>I blog about web development - especially frontend frameworks</p>
        </section>
    )
}