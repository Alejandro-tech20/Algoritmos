const StartPoint = () => {

    const result = useFetchT('https://jsonplaceholder.typicode.com/users',true);
    return (
        <div>
            {result.status === 'Loading' && <div>{result.status}</div>}
            {result.status === 'Loaded' && (
                result.datos.map(item => (
                    <div>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                    </div>
                ))
            )}
        </div>
    )
}

export default StartPoint;
