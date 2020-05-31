const StartPoint: FC<IProps> = ({ url }) => {
    const result = usePostStarshipService('https://reqres.in/api/users?page=2');
    return (
        <div>
            {result.status === 'loading' && <div>{result.status}</div>}
          {result.status === 'loaded' && (
              result.payload.data.map(item=>(
                  <div key={item.id}>
                      <h2>{item.first_name}</h2>
                      <h4>{item.last_name}</h4>
                      <h5>{item.email}</h5>
                      <img src={item.avatar} alt={item.first_name}/>
                  </div>
              ))
          )}
                </div>)
}

export default StartPoint;
