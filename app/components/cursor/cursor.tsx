import { useState, useEffect, useRef } from "react";
import {useAppContext} from '@/app/appContext'

import styles from './cursor.module.css'

export default function Cursor() {
    const {cursorState} = useAppContext()!;
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const prevTime = useRef(performance.now()); 
    const targetPos = useRef({ x: 0, y: 0 });
    const speed = 15; 

    const lerp = (a: number, b: number, t: number) => a + t * (b - a);

    function updateSmoothPos(currentTime: number) {
        const dt = (currentTime - prevTime.current) / 1000;
        
        prevTime.current = currentTime;

        setPosition(prev => ({
            x: lerp(prev.x, targetPos.current.x, dt * speed),
            y: lerp(prev.y, targetPos.current.y, dt * speed),
        }));
        requestAnimationFrame(updateSmoothPos);
    }

    const handleMouseMove = (event: MouseEvent) => {
        targetPos.current.x = event.clientX;
        targetPos.current.y = event.clientY;
    };

    useEffect(() => {
        requestAnimationFrame(updateSmoothPos);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <div className=
        {`${styles.cursor} ${cursorState == "hover" ? styles.cursorSpin : ''}`} style={{top:`calc(${position.y}px - ${1.25/2}rem)`,left:`calc(${position.x}px - ${1.25/2}rem)`}}/>
    );
}