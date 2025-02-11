'use client';
import Image from "next/image";
import {useState,useEffect,useRef} from 'react';
import HeaderLink from "./components/headerLink/headerLink";
import ConnectButton from "./components/connectBtn/connectBtn";
import GridItem from "./components/gridItem/gridItem";
import ReturnToTop from "./components/returnToTopBtn/returnToTopBtn";
import Cursor from "./components/cursor/cursor";
import ContactCarousel from "./components/contactCarousel/contactCarousel";
import PopupWindow from "./components/popupWindow/popupWindow";
import { GridItemType } from "./appContext";
export default function Home() {
  
  const contactRef = useRef<HTMLElement | null> (null);
  const projectRef = useRef<HTMLElement | null> (null);
  const handRef = useRef<HTMLElement | null> (null);
  const experienceRef = useRef<HTMLElement | null> (null);
  const handWave = () => {
    handRef.current?.classList.add('handAnimated')
  }
  const endHandWave = () => {
    handRef.current?.classList.remove('handAnimated')
  }

  const experienceArr : GridItemType[] = [
    { Title:"Software Engineering Intern",
      subTitle:"Research To Empower",
      imgLocation: "/rete.png",
      description: `- Spearheaded the development of mobile application pages using React Native, Expo, Redux, and Figma
      - Implemented LLM chatbot data storage & retrieval using Firebase Functions & Firestore, resulting in secure and low-latency conversations
      - Developed a documentation system that organized resources for easy access, resulting in a 35% reduction in onboarding time for fellow interns`,
      date: 'Aug 2024 - Jan 2025'
    },
    { Title:"Software Engineering Fellow",
        subTitle:"Headstarter AI",
        imgLocation: "/headstarter.png",
        date: "Jun 2024 – Sep 2024",
        description : `• Designed and implemented 5 distinct software projects utilizing industry-standard technologies, including Next.js, Firebase, Pinecone, and Next.js API Routes, enhancing functionality and user experience
        • Integrated Llama 3.1 model using Groq into a customer service application, with an average response time of 2.1s
        • Participated in workshops led by software engineers from Google, Stanford, Oracle, Meta, Apple, Doordash`
    }
  ];
 
  const projectsArr : GridItemType[] = [
    
    { Title:"Autofill Jobs",
      subTitle:"Vue, Chrome, Gemini",
      imgLocation: "/autofill.png",
      url: "https://github.com/andrewmillercode/Autofill-Jobs",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
    },
    { Title:"Snappit",
        subTitle:"AWS S3, Next.js, Supabase, PostgreSQL, Prisma, Gemini, REST APIs",
        imgLocation: "/snap.png",
        description: `• Built a caloric estimator that accurately estimates food calories and macronutrients when given an image, which won 2nd place in the TeenTechSF Civic Hackathon
• Leveraged the Gemini-1.5-flash model to read inline base64 image data and retrieve nutritional estimates
• Finetuned LLM calls for reliable and 95% accurate predictions with packaged foods`,
url: "https://www.youtube.com/watch?v=enO1d1N2g4Q"
    },
    { Title:"edCode",
        subTitle:"Express.js, React, MongoDB Atlas, Firebase Auth",
        imgLocation: "/edcode.png",
        description: `• Spearheaded the development of backend APIs in Express, including user validation, schemas with Mongoose, and data transfer with MongoDB Atlas
• Led Product Hunt and public launches, reaching #6 on homepage, and #2 Educational Product of the Week
• Developed a budget friendly comprehensive TTS solution leveraging the Piper voice model, decreasing costs by over
99%`,
url:"https://edcodee.me/"
    },
    { Title:"Predictoro",
        subTitle:"Python, Flask, scikit-learn, Firebase, BS4, Pandas",
        imgLocation: "/predictoro.png",
        description: `• Improved RF model accuracy by 18% (from 58% to 76%), using GridSearchCV and RandomizedSearchCV to tune hyperparameter values, resulting in more reliable predictions
• Developed a Flask backend to serve a pre-trained RF machine learning model, integrating it with Firebase Realtime DB for real-time CRUD operations, resulting in seamless data synchronization and 30 % decrease in server memory usage
• Developed a web scraping pipeline using BS4 and Pandas to extract and clean data from ufcstats.com, processing it into a structured CSV dataset`
    },
  ];
  return (
    <div className="main">
        <Cursor/>
        <ReturnToTop/>
        <PopupWindow/>
        <header>
            <HeaderLink content="Experience" sectionReference={experienceRef}/>
            <HeaderLink content="Projects" sectionReference={projectRef}/>
            <HeaderLink content="Contact" sectionReference={contactRef}/>
        </header>

        <section style={{height:'90vh'}}>
            <div className="vertGroup" style={{justifyContent:'space-between'}}>
                <span style={{marginTop:'25vh'}}>
                    <h1 className="extraLarge" style={{position:'relative'}}>Hi. I'm Andrew <span ref={handRef} onMouseEnter={handWave} onAnimationIteration={endHandWave} id='hand'>👋</span></h1>
                    <h1 className="medium"> A software engineer specializing in full-stack & ML dev</h1>
                    <div className="connectButtonHolderSmall">
                        <ConnectButton type='GitHub' />
                        <ConnectButton type='LinkedIn' />
                        <ConnectButton type='Email' />
                    </div>
                </span>
                <h1 className="hint"> scroll down or use above links to continue</h1>
            </div>
          
        </section>
       
        <section ref={experienceRef} >
            <div className="vertGroup" style={{justifyContent:'space-between'}}>
                <h1 className="large fancy">Experience</h1>
                <div className="gridHolder">
                    {experienceArr && experienceArr.map((exp,i) => {
                        return <GridItem key={i} props={exp} />;
                    })}
                
                </div>
            </div>
        </section>

        <section ref={projectRef}>
            <div className="vertGroup" style={{justifyContent:'space-between'}}>
                <h1 className="large fancy">Projects</h1>
                <div className="gridHolder">
                {projectsArr && projectsArr.map((exp,i) => {
                        return <GridItem key={i} props={exp} />;
                    })}
                   
                </div>
            </div>
        </section>

        <section ref={contactRef}>
            <div className="vertGroup" style={{justifyContent:'space-between'}}>
                <h1 className="large fancy">Contact</h1>
                <ContactCarousel/>
            </div>
        </section>
    </div>
  );
}
