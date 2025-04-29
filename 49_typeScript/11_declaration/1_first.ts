// console.log(document)//imp-> hold control and click on document


//imp-> to create pkg.json file => type npm init -y

//imp-> to install axios => npm i axios => isse lock.json bhi aai and node module bhi aa gyi




import axios, { AxiosResponse } from "axios" //imp-> hold ctrl and press former axios


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}



const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")//imp-> google mey type kro Jsonplaceholder 

        console.log("Todo : ", response.data)
    }
    catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error("Axios Error ", error.message)

            if (error.response) {
                console.log("Status : ", error.response.status);
                console.log("Data: ", error.response.data)
            }

        } else {
            console.error("Error : ", error.message)
        }
    }
}


fetchData();