
console.log(fetch('1_text.txt'))

//imp-> cosole mey dekho if (ok is true) then run one code and if thats not true then throw the error (conosle me dekho {ok} karke boolean value aayegi)

fetch("2_text.txt")
    .then((res) => {
        if (!res.ok) throw Error(res.statusText);//imp-> (!res.ok) it means (res.ok == false)
        return res.text();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


