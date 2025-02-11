import Image from "next/image";
import { useRef } from "react";

import {useAppContext,GridItemType} from '@/app/appContext';

import styles from './gridItem.module.css';

export default function GridItem(
    {props}:
    {props: GridItemType}
){
    const {setCursorState, setCurGridItem,togglePopupOn} = useAppContext()!;
    const gridItemRef = useRef<HTMLDivElement | null> (null);

    const hoverOver = () => {
        if (!gridItemRef.current) return;

        setCursorState("hover");

        const parent = gridItemRef.current.parentElement!;
        for (let el of parent.children) {
            if (el != gridItemRef.current) el.classList.add(styles.gridItemNotSelected)
        }
    }
    const onClick = () => {
        setCurGridItem(props);
        togglePopupOn(true);
    }
    const onHoverEnd = () => {
        if (!gridItemRef.current) return;

        setCursorState("default");
        
        const parent = gridItemRef.current.parentElement!;
        for (let el of parent.children) {
            el.classList.remove(styles.gridItemNotSelected)
        }
    }
    return (
        <div className={styles.gridItem} ref={gridItemRef} onClick={onClick} onMouseEnter={hoverOver} onMouseLeave={onHoverEnd}>
            <Image className={styles.gridItemImg} src={(props.imgLocation ?? '/test.jpg')} fill alt='test' quality={40} />
            <div className={styles.gridItemInfo}>
            <div className="vertGroup">
                <h1 className={styles.gridItemTitle}>{props.Title}</h1>
                <h1 className={styles.gridItemSubTitle}>{props.subTitle}</h1>
            </div>
            <h1 className={styles.gridItemDate}>{props.date}</h1>
            </div>
        </div>
    );
}