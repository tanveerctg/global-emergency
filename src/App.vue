<template>
<div class="container">

        <div class="modal">
            <div class="modalBg">
                 <div>
                    <p class="modal__title modal__content">Contact us</p>
                    <div class="height__md"></div>
                    <a href="mailto:info@globalemergencypreparedness.org" class="email modal__content">info@globalemergencypreparedness.org</a>        
                        <svg @click="modalOpen" class="modal__close" height="18pt" viewBox="0 0 365.696 365.696" width="18pt" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg>                 
                 </div>
            </div>
        </div>

        <div class="hero" id="home">
            <div class="navbar" >
                <img src="./assets/logo-white.svg" class="logo">
                <div>
                 <a href="https://flipbook.globalemergencypreparedness.org" target="_blank"><img src="./assets/book.png" class="book"></a>
                 <img src="./assets/mail.svg" class="mail" @click="modalOpen"> 
                </div>

            </div> 
            <a href="#about">
                <div class="smoothScroll">
                    <span class="circle"></span>       
                </div>
            </a>
            <img src="./assets/world.gif" class="world">
            <p class="slogan"><span class="sloganContainer">We are designing the future of <span class="emergency">emergency</span></span></p>
            <div class="layer"></div>
        </div>

        <div class="aboutSec">
            <div class="height__md"></div>
            <h1 id="about">About</h1>
            <p>We are building a global network of companies.We work with those committed to emergency preparation and emergency energy resources before, during, and in the aftermath of natural disasters and public health emergencies.</p>
            <div class="height__md"></div>      
        </div>

        <div class="myvatarSec">
            <div class="height__md"></div>
            <h1 id="myvatar">Myvatar™</h1>
            <p>At <strong>GEP</strong>, we are data driven specializing in manufacturing consultation and product market research. Call us about our unique <strong>Myvatar™</strong> market research program and see what our unique <strong>Myvatar™</strong> program can do for your company!</p>
            <div class="height__md"></div>      
        </div>

        <div class="ourPlatform">
        <div class="whatWeDo__titleContainer">
            <h1>
                Our Platform
            </h1>    
            </div> 
            <img src="./assets/gep-desktop.png" alt="" class="platFormImg__lg">
            <img src="./assets/gep-mobile.png" alt="" class="platFormImg__sm">
            <img src="./assets/gep-tab.png" alt="" class="platFormImg__tab">
        <div class="upScrollBtnContainer">
            <a href="#home">
                <div class="upScrollBtn">
                    <span class="circle"></span>
                </div>
            </a>  
        </div>
        </div>
       <div class="footer">
           <span>&#169; Global Emergency Preparedness</span>
       </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {CSSRulePlugin} from "gsap/all";


export default {
  name: 'App',
  data(){
  return{
      isModalOpen:false
  }
  }
  ,

  mounted(){
        
        //watch the free video on how this demo was made
        // https://www.snorkl.tv/scrolltrigger-smooth-scroll/

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(CSSRulePlugin);
  
        gsap.to(".navbar",{
                        background:'black',
                        duration:1,
                        ease: "slow",
                   
                        scrollTrigger:{
                                    trigger:".smoothScroll",
                                    start:"top top",
                                    scrub:true,
                                    end:"bottom bottom"
                        }
                    })
                        gsap.to(".navbar",{
                        background:'black',
                        duration:1,
                        ease: "slow",
                        scrollTrigger:{
                                    trigger:".contact",
                                    start:"top top",
                                    scrub:true,
                                    end:"bottom bottom"
                        }
                    })

        const tl = gsap.timeline({ defaults: { ease: "slow" } });
    
        tl.to(".slogan .sloganContainer", { y: "0%", duration: 1, stagger: 0.25 });
        tl.from(".logo", { opacity: 0,duration: 1});
        tl.from(".mail", { opacity: 0 },"-=1");
        tl.from(".book", { opacity: 0 },"-=1");

        const parralax=gsap.timeline({ 
                ease:'slow',
                scrollTrigger:{
                trigger:".hero",
                start:"top top",
                scrub:1,
                end:"bottom bottom-=250"
            }})
            parralax.to(".hero .slogan",{
                y:-300,
                opacity:0,
                duration:4

            },3)
            .to(".hero .smoothScroll",{
                opacity:0,
                duration:3
            },5)
            var aboutH1After = CSSRulePlugin.getRule(".aboutSec h1:after"); //get the rule
           

           const parralaxAbout=gsap.timeline({ease:'slow',scrollTrigger:{ 
                trigger:".aboutSec",
                start:"top+=60 bottom",
                end:"top+=150 bottom-=100",
                scrub:.5
            }})
            parralaxAbout         
            .from(".aboutSec h1,.aboutSec p",{opacity:0,y:-100,duration:1})
            .from(aboutH1After,{ cssRule: {scale:0,transformOrigin:'center',duration:2}},0)


            var myvatarH1After = CSSRulePlugin.getRule(".myvatarSec h1:after"); //get the rule
           

           const parralaxMyvatar=gsap.timeline({ease:'slow',scrollTrigger:{ 
                trigger:".myvatarSec",
                start:"top+=60 bottom",
                end:"top+=150 bottom-=100",
                scrub:.5
            }})
            parralaxMyvatar         
            .from(".myvatarSec h1,.myvatarSec p",{opacity:0,y:-100,duration:1})
            .from(myvatarH1After,{ cssRule: {scale:0,transformOrigin:'center',duration:2}},0)

           var contactH1After = CSSRulePlugin.getRule(".whatWeDo__titleContainer h1:after"); //get the rule

           const parralaxContact=gsap.timeline({ease:'slow',scrollTrigger:{ 
                trigger:".ourPlatform",
                start:"top+=60 bottom",
                end:"top+=150 bottom-=100",
                scrub:1
            }})
            parralaxContact        
            .from(".ourPlatform h1",{opacity:0,y:-100,duration:2})
            .from(".ourPlatform img",{opacity:0,duration:2,delay:2})
            .from(".upScrollBtn",{
                opacity:0,
                duration:1
            },5)


  },
  methods:{
      modalOpen(){
        const tl = gsap.timeline({ defaults: { ease: "power2.out" }});
        
        if(this.isModalOpen){
         
            tl.to(".modal", { scaleY:0 ,transformOrigin:'center'})
              .from(".modal__content",{y:15,opacity:0})
            this.isModalOpen=!this.isModalOpen
    
        }else{
            tl.to(".modal", { scaleY:1 ,transformOrigin:'center'})
            .from(".modal__content",{y:20,opacity:0})
            this.isModalOpen=!this.isModalOpen
        }
            
      }
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
        html{
            font-size:10px;
        }
        :root {
            --font_about:2rem;
            --font_lg:4rem;
            --font_title:4rem;
            --font_md:3rem;
            --height_lg:4rem;
            --height_md:3rem;
            --height_xl:8.5rem;
            --vh:100vh
        }
        .ourPlatform{
            max-width: 100%;
            height: auto;
            background: black;
        }
        .ourPlatform img{
            max-width: 100%;
            height: auto;
            transform-origin: center;
            margin:0 auto;
        }
        .footer{
            background: black;
            color:white;
            padding:15px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .footer span{
            font-size: 14px;
        }

        .hero{
            height:100vh;
            width:100%;
            position :relative;
            overflow-y:hidden;
            background-color: black;
        }
        .modal{
            position: fixed;
            top: 2vw;
            left: 2vw;
            right: 2vw;
            bottom: 2vw;
            background:white;
            z-index:5000;
            -webkit-transform:scaleY(0);
                -ms-transform:scaleY(0);
                    transform:scaleY(0)
        }

        .email{
            display: inline-block;
            font-size: var(--font_lg);
            -ms-word-break: break-all;
            word-break: break-all;

            /* Non standard for WebKit */
            word-break: break-word;

            -webkit-hyphens: auto;
            -moz-hyphens: auto;
                hyphens: auto;
                text-decoration: none;
                color: black;
                position: relative;
                margin: 0 20px;
        }
        .email::after{
            position: absolute;
            content: "";
            background: black;
            height:2px;
            width:100%;
            bottom:6px;
            left:0;
            transform: scaleX(0);
            transform-origin:left;
            transition: all .2s ease-in;
                -ms-word-break: break-all;
             word-break: break-all;
        }
        
        .email:hover{
            font-weight:600;
        }
        .email:hover.email::after{
            transform: scaleX(1);
            
        }
        .modal__title{
            font-size: var(--font_md);
            font-weight:600;
        }
       .modal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            -webkit-transition: 0.45s linear 0.55s;
            -o-transition: 0.45s linear 0.55s;
            transition: 0.45s linear 0.55s;
            -webkit-transform: scaleX(1.2) scaleY(1.2);
            -ms-transform: scaleX(1.2) scaleY(1.2);
            transform: scaleX(1.2) scaleY(1.2);
            z-index: 0;
            background-color:black;
    }
        .modalBg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:white;
            color:black;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            text-align: center;
        }
        .modal__close{
            position:absolute;
            right:20px;
            top:20px;
            cursor: pointer;
        }
        .world{
            position: absolute;
            left:50%;
            top:50%;
            -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
            width:600px;
            max-width: 100%;
    
        }
        .layer{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            min-height:100vh;
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
            font-size: var(--font_lg);
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
        .about,.myvatar{
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
            position: fixed;
            padding:10px 20px;
            top:0;
            /* max-width:1200px; */
            width:100%;
            z-index: 3333;
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
        .book{
            width:35px;
            cursor: pointer;  
            margin-right:15px;
        }
        .mail{
            width:35px;
            cursor: pointer;
            
        }
        .aboutSec{
            display:-webkit-box;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
                -ms-flex-direction:column;
                    flex-direction:column;
            -webkit-box-align:center;
                -ms-flex-align:center;
                    align-items:center;
            padding:0 20px ;
            position:relative;
            z-index:111;
            background:white;
            color:black;
        }
        .myvatarSec{
            display:-webkit-box;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
                -ms-flex-direction:column;
                    flex-direction:column;
            -webkit-box-align:center;
                -ms-flex-align:center;
                    align-items:center;
            padding:0 20px ;
            position:relative;
            z-index:111;
            background:#D7F205;
            color:black;       
        }
        .contact{
                     display:-webkit-box;
                     display:-ms-flexbox;
                     display:flex;
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
                -ms-flex-direction:column;
                    flex-direction:column;
            -webkit-box-align:center;
                -ms-flex-align:center;
                    align-items:center;
            padding:0 20px ;
            position:relative;
            z-index:111;
            background:white;
            color:black; 
        }
        .aboutSec h1{
            font-size:var(--font_title);
            position:relative;
            font-weight:600;
            margin-bottom:var(--height_md);
        }
        .aboutSec h1::after{
            content:"";
            position:absolute;
            width:30px;
            height:2px;
            background:black;
            bottom:-5px;
            left:50%;
            -webkit-transform:translateX(-50%);
                -ms-transform:translateX(-50%);
                    transform:translateX(-50%);

        }
        .myvatarSec h1{
            font-size:var(--font_title);
            position:relative;
            font-weight:600;
            margin-bottom:var(--height_md);
        }
        .myvatarSec h1::after{
            content:"";
            position:absolute;
            width:30px;
            height:2px;
            background:black;
            bottom:-5px;
            left:50%;
            -webkit-transform:translateX(-50%);
                -ms-transform:translateX(-50%);
                    transform:translateX(-50%);

        }
        .whatWeDo__titleContainer{
            background: black;
            padding:var(--height_md) 0; 
            display: flex;
            justify-content: center; 
            
        }
        .whatWeDo__titleContainer h1{
            font-size:var(--font_title);
            position:relative;
            font-weight:600;
             z-index: 222;
        }
        
        .whatWeDo__titleContainer h1::after{
            content:"";
            position:absolute;
            width:30px;
            height:2px;
            bottom:-5px;
            left:50%;
            -webkit-transform:translateX(-50%);
                -ms-transform:translateX(-50%);
                    transform:translateX(-50%);
            background: white;
            z-index: 222;
        }

        .aboutSec p{
            max-width:800px;
            width:100%;
            text-align:center;
            line-height:1.35;
            font-size:var(--font_about);
        }
        .myvatarSec p{
            max-width:800px;
            width:100%;
            text-align:center;
            line-height:1.35;
            font-size:var(--font_about);
        }
        .contact__email{
            display: inline-block;
            text-align:center;
            line-height:1.8;
            font-size:var(--font_about);
        
        }
        .height__md{
            height:var(--height_md);
        }
        .height__lg{
            height:var(--height_lg);
        }
            .height__xl{
            height:var(--height_xl);
        }

        .smoothScroll{
            position: absolute;
            bottom:15px;
            left:50%;
            -webkit-transform:translateX(-50%);
                -ms-transform:translateX(-50%);
                    transform:translateX(-50%);
            z-index:1000;
            height:45px;
            width:24px;
            border:2px solid white;
            border-radius:20px;
                  display:-webkit-box;
                  display:-ms-flexbox;
                  display:flex;
            -webkit-box-pack:center;
                -ms-flex-pack:center;
                    justify-content:center;
        }      
 
        .smoothScroll .circle{
            position:absolute;
            margin-top:1px;
            border-radius: 50%;
            width:6px;
            height: 6px;
            background: white;
            -webkit-animation: cir 2s ease-in-out infinite;
                    animation: cir 2s ease-in-out infinite;
        }
        @-webkit-keyframes cir{
            0%{
                top:15%;
                -webkit-transform: translateY(-15%);
                        transform: translateY(-15%);
                opacity: 1;
            }
            60%{
                opacity: .8;
            }
            100%{
                top:85%;
                -webkit-transform: translateY(-85%);
                        transform: translateY(-85%);
                opacity: 0;
            }

        }
        @keyframes cir{
            0%{
                top:15%;
                -webkit-transform: translateY(-15%);
                        transform: translateY(-15%);
                opacity: 1;
            }
            60%{
                opacity: .8;
            }
            100%{
                top:85%;
                -webkit-transform: translateY(-85%);
                        transform: translateY(-85%);
                opacity: 0;
            }

        }
        @-webkit-keyframes upCir{
            0%{
                top:15%;
                -webkit-transform: translateY(-15%);
                        transform: translateY(-15%);
                opacity: 1;
            }
            60%{
                opacity: .8;
            }
            100%{
                top:85%;
                -webkit-transform: translateY(-85%);
                        transform: translateY(-85%);
                opacity: 0;
            }

        }
        @keyframes upCir{
            0%{
                top:85%;
                -webkit-transform: translateY(-85%);
                        transform: translateY(-85%);
                opacity: 1;
            }
            60%{
                opacity: .8;
            }
            100%{
                top:15%;
                -webkit-transform: translateY(-15%);
                        transform: translateY(-15%);
                opacity: 0;
            }

        }

        .upScrollBtnContainer{
            background: black;
            display: flex;
            justify-content: center;
        }
        .upScrollBtn{
            position: relative;
            z-index:22;
            height:45px;
            width:24px;
            border:2px solid white;
            border-radius:20px;
                  display:-webkit-box;
                  display:-ms-flexbox;
                  display:flex;
            -webkit-box-pack:center;
                -ms-flex-pack:center;
                    justify-content:center;
        }

        .upScrollBtn .circle{
               position:absolute;
            margin-top:1px;
            border-radius: 50%;
            width:6px;
            height: 6px;
            background: white;
            -webkit-animation: upCir 2s ease-in-out infinite;
                    animation: upCir 2s ease-in-out infinite;
        }
        .platFormImg__lg,.platFormImg__tab{
            display: none;
        }
        /* Small devices (landscape phones, 576px and up) */
        @media (min-width: 576px) {
          
        }
        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
            html{
                font-size:12px;
            }
            .aboutSec p,.contact__email,.myvatarSec p{
              font-size:30px;
             }
            .platFormImg__lg{
                display: none;
            }
            .platFormImg__sm{
                display: none;
            }
            .platFormImg__tab{
                display: block;
            }
        }
        /* Large devices (desktops, 992px and up) */
        @media (min-width: 992px) {
                html{
                    font-size:13px;
                }
                .aboutSec p,.contact__email,.myvatarSec p{
                    font-size:52px;
                }
            .platFormImg__lg{
                display:block;
            }
            .platFormImg__sm{
                display: none;
            }
            .platFormImg__tab{
                display: none;
            }
           
        }

        @media (max-width: 1050px) {
                .email::after{
                    display: none;
                }
                .email:hover{
                    font-weight:normal;
                }
        }
        @media (max-width: 1024px) {
            .whatWeDo {
                   height:70vh;
            }
        }
        @media (max-width: 800px) {
            .whatWeDo {
                height: 60vh;
                background: black url("./assets/gep-mobile.png") no-repeat center;
                background-size: 100%;  
            }

        }
        @media (max-width: 450px) {
            .whatWeDo {
                height: 40vh;
                width: 100%;
                background: black url("./assets/gep-mobile.png") no-repeat center;
                background-size: 100%;
            }
            .smoothScroll{
                bottom: 60px;
            }

        }
        @media (orientation: landscape) and (max-width: 900px) {
                .world {
                    width:70%;
                }
            }
        @media (orientation: landscape) and (max-width: 650px) {
            .world {
                width:60%;
            }
        }
        @media (orientation: landscape) and (max-width: 550px) {
            .world {
                width:40%;
            }
        }
</style>


