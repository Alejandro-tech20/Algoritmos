const StartPoint = () => {
    // const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    // // const [hoverRef, isHovered] = useHover();

    // return (
    //     <div ref={hoverRef}>
    //         {isHovered ? '😁' : '☹️'}
    //         Stuff
    //     </div>
    // );


    // return (
    //   <div ref={hoverRef}>
    //     {isHovered ? '😁' : '☹️'}
    //   </div>

    // );

        const [second, setSecond] = useState(0);
        const [isActive, setIsActive] = useState(false);
         const [hoverRef, isHovered] = useHover<HTMLDivElement>();


        function toggle(){
            setIsActive(!isActive);
        }
        const reset =()=>{
            setSecond(0);
            setIsActive(false);
        }

        type Tt = ReturnType<typeof setInterval>
        useEffect(() => {
            let intervalo:Tt ;
           
            if(isHovered)
            {
                intervalo = setInterval(()=>{
                    setSecond(second=> second+1)
                },200)
            }
            return () => {
                clearInterval(intervalo)
            }
        },[isHovered]
       
        )

        return <div style={{display:'flex'}}>
            <div ref={hoverRef}>{second}...s</div>
            <div>
    <button onClick={toggle} >{!isActive ? 'Comenzar':'Pausar'}</button>
                <button onClick={()=>reset()} >Resetear</button>
            </div>
        </div>
}

export default StartPoint
