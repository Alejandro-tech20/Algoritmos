function useFetchT(url: string, isReady: boolean): TReturnUseFetch<IData> {
    const [result, setResult] = useState<TReturnUseFetch<IData>>({
        status: 'Loading'
    })
    useEffect(() => {
        if (isReady) {
            (async () => {
                try {
                    const res = await fetch(url);
                    const resjson = await res.json();
                    setResult({ status: 'Loaded', datos: resjson });
                }
                catch (error) {
                    setResult({ status: 'Error', error: error });
                }
            })();
        }
        // return ()=>{
        //     isReady=false;
        // }
    }, [isReady, url])

    return result;
}
