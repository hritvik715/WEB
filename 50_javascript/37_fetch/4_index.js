const result = document.querySelector('.results')

async function renderData() {
    try {
        // const response = await fetch('./4_dataaa.json')//imp-> ye galat file daali hamne toh error catch ho jaayegi

        const response = await fetch('./4_data.json')
        if (!response.ok) throw Error(response.statusText)
        const data = await response.json()//imp-> we are converting that response to json format
        console.log(data)
        result.textContent = data.name;
        // result.textContent = data.age;
    } catch (error) {
        console.log(error)
    }
}



renderData()

//imp-> 15: 10:00