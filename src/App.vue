<template>
   <div class="scrollContainer">
        <div class="hero">
            <div class="navbar">
                <img src="./assets/logo-white.svg" class="logo">
                <a href="mailto:info@globalemergencypreparedness.org"><img src="./assets/mail.svg" class="mail"></a>  
            </div>         
            <img src="./assets/world.gif" class="world">
            <p class="slogan"><span class="sloganContainer">We are designing the future of <span class="emergency">emergency</span></span></p>
            <div class="layer"></div>
        </div>
        <div class="aboutSec">
            <h1 class="k">About</h1>
            <div class="height__md"></div>
            <p class="k">We are building a network of companies and work with those committed to <strong>emergency preparation and emergency energy resources</strong> before, during, and in the aftermath of <strong>natural disasters and public health emergencies.</strong></p>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';

export default {
  name: 'App',
  components: {

  },
  mounted(){
        //watch the free video on how this demo was made
        // https://www.snorkl.tv/scrolltrigger-smooth-scroll/

        gsap.registerPlugin(ScrollTrigger);

        // const locoScroll = new LocomotiveScroll({
        // el: document.querySelector(".scrollContainer"),
        // smooth: true
        // }); 

        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".slogan .sloganContainer", { y: "0%", duration: 1, stagger: 0.25 });
        tl.from(".logo", { opacity: 0,duration: 1});
        tl.from(".mail", { opacity: 0 },"-=1");

        const parralax=gsap.timeline({ 
                ease:'power1.out',
                scrollTrigger:{
                trigger:".hero",
                start:"top top",
                scrub:true,
                end:"bottom center-=300",
                pin:true
            }})
            parralax.to(".hero .slogan",{
                y:-300,
                opacity:0,
                duration:3
    
            }).to(".hero .world",{
                opacity:0,
                duration:2
               
            })
           const parralaxAbout=gsap.timeline({ease:'power1.out',scrollTrigger:{ 
                trigger:".aboutSec",
                start:"top bottom-=40",
                end:"bottom bottom-=150",
                scrub:true
            }})
            parralaxAbout.from(".aboutSec h1",{opacity:0})
            .from(".aboutSec p",{opacity:0},0)
  }
}
</script>

<style >
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

       *{
            padding:0;
            margin:0;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            font-family: 'Quicksand', sans-serif;
        }
        .hero{
            height:100vh;
            width:100%;
            position :relative;
            overflow-y:hidden;
        }
        .world{
            position: absolute;
            left:50%;
            top:50%;
            -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
            width:700px;
            max-width: 100%;
    
        }
        .layer{
            position: absolute;
            width:100%;
            height:100%;
            background: rgb(0, 0, 0,.5);
        }
        .slogan{
            color:white;
            font-weight: 500;
            position: absolute;
            top:50%;
            left:50%;
            -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
            z-index: 1;
            font-size: 40px;
            text-align: center;
            width:100%;
            padding:0 10px;
            overflow: hidden;
        }
        .slogan .sloganContainer{
            display: inline-block;
            -webkit-transform: translateY(100%);
                -ms-transform: translateY(100%);
                    transform: translateY(100%);
        }
        .about{
            color: white;
            position: absolute;
            bottom: 0;
            z-index: 1;
            padding:20px 20px;
            max-width:480px;
            width:100%;
            line-height: 1.5;
            font-weight:300;
            font-size: 14px;
        }
        .emergency{
            color: rgb(255, 19, 19);
        }
        .navbar{
            position: absolute;
            left:50%;
            padding:20px 20px;
            -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                    transform: translateX(-50%);
            /* max-width:1200px; */
            width:100%;
            z-index: 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
        }
        .logo{
            width:150px;
        }
        .mail{
            width:35px;
        }
        .aboutSec{
            display:flex;
            flex-direction:column;
            align-items:center;
            min-height:20vh;
            padding:50px 0;
        }
        .aboutSec h1{
            font-size:35px;
        }
        .aboutSec p{
            max-width:700px;
            text-align:center;
            line-height:1.8;
            font-size:18px;
        }
        .height__md{
            height:20px;
        }
        @media only screen and (min-width: 1400px) {
            .slogan{
                 font-size: 50px;
            }
        }
        @media only screen and (max-width: 650px) {
            .mail{
                width: 30px;
            }
        }
</style>
