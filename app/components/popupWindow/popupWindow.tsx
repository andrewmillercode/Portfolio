import styles from './popupWindow.module.css';
import Image from 'next/image';
import { useAppContext } from '@/app/appContext';
import { useRef } from 'react';
export default function PopupWindow(){
    const {popupState,togglePopupOn,curGridItem} = useAppContext()!;
    const popupWindow = useRef<HTMLDivElement | null>(null);

    const exit = () => {
        togglePopupOn(false);
    }
    const min = () => {
        if(!popupWindow) return;
        if(!popupWindow.current) return;
        
        popupWindow!.current!.classList.remove(styles.full)
    }
    const fullScreen = () => {
        if(!popupWindow) return;
        if(!popupWindow.current) return;
       
        popupWindow.current.classList.add(styles.full)
       
    }
    return (
        <>
        {popupState && curGridItem && <div className={styles.bgBlur}>
            <div ref={popupWindow} className={styles.popupWindow}>
                <nav className={styles.nav}> 
                    <button onClick={exit} className={`${styles.navBtn} ${styles.exit} `}/>
                    <button onClick={min} className={`${styles.navBtn} ${styles.hide} `}/>
                    <button onClick={fullScreen} className={`${styles.navBtn} ${styles.enlarge} `}/>
                </nav>
                <div className={styles.content}>
                    <Image className={styles.itemImg} src={(curGridItem.imgLocation ?? '/test,jpg')} fill alt='test' quality={70} priority/>
                    <div className='horizGroup'>
                        <div className="vertGroup">
                            <h1 className={styles.gridItemTitle}>{curGridItem.Title}</h1>
                            <h1 className={styles.gridItemSubTitle}>{curGridItem.subTitle}</h1>
                        </div>
                        {curGridItem.date && <h1 className={styles.gridItemDate}>{curGridItem.date}</h1>} {curGridItem.url && <h1 className={styles.url} onClick={()=>{window?.open(curGridItem.url, '_blank');}}>Link</h1>}
                    </div>
                    <p className={styles.p}>{curGridItem.description}</p>
                </div>
            </div>
        </div> }
        </>
    );
}