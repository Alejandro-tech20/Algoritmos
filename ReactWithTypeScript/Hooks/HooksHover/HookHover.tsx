
import React, { useState, useEffect, ChangeEvent, MouseEvent, useRef, useCallback } from 'react'

type UseHoverType<T extends HTMLElement> = [React.RefObject<T>, boolean];
// =============================
function useHover<T extends HTMLElement>(): UseHoverType<T> 
{
    const [isHovering, setIsHovering] = useState(false);
    let isTouched = false;
    const ref = useRef<T>(null);

    const handleMouseEnter = () => {
        if (!isTouched) {
            setIsHovering(true);
        }
        isTouched = false;
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleTouch = () => {
        isTouched = true;
    };

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('touchstart', handleTouch);

            return () => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('touchend', handleTouch);
            };
        }
    }, [ref.current]);

    return [ref, isHovering];
}