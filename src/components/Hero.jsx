import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils/index'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    }

    // Throttle function to limit the resize handler execution
    const throttle = (func, limit) => {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    useEffect(() => {
        const handleResize = throttle(handleVideoSrcSet, 300);
        window.addEventListener('resize', handleResize);

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2 })
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
    }, [])

    return (
        <>
            <section className='w-full nav-height bg-black relative'>
                <div className='h-5/6 w-full flex-center flex-col'>
                    <p id='hero' className='hero-title'>iPhone 15 Pro</p>

                    <div className='w-9/12 md:w-10/12'>
                        <video className='pointer-events-none'
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            key={videoSrc}>
                            <source src={videoSrc} type='video/mp4' />
                        </video>
                    </div>
                </div>
                <div id="cta"
                    className='flex flex-col items-center opacity-0 translate-y-20'>
                    <a href="#highlights" className='btn'>Buy</a>
                    <p className='font-normal text-xl'>From $200/month or $999</p>
                </div>
            </section>
        </>
    )
}

export default Hero;