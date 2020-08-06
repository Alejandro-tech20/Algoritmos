function FindIntersection(strt){

    const [firts, second] = strt.map(s => s.split(", "))

    const temp = {};
    const result = [];

    for(const number of firts){
        temp[number] = true;
    }
    for(const number of second){
        if(temp[number]){
            result.push(number)
        }
    }

    return result.length ? result.join(',') : false;
}