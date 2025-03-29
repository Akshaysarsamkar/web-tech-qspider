async function demo(){

    let data = await fetch('https://api.data.gov.sg/v1/environment/air-temperature')

    console.log(data)

    let res = await data.json()
    console.log(res)

}

demo();