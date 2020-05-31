const usePostStarshipService = (url: string) => {
    const [result, setResult] = useState<Service<IStartShips>>({
        status: 'loading'
    })
    useEffect(() => {
        if (url) {
            setResult({ status: 'loading' });
            fetch(url)
                .then(response => response.json())
                .then(response => setResult({ status: 'loaded', payload: response }))
                .catch(error => setResult({ status: 'error', error }));
        }
    }, [url]);

    return result;
}