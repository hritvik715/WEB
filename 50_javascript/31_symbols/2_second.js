const symbol1 = Symbol("name")
const symbol2 = Symbol("name")


const huxn = {}
huxn.age = 19;

huxn['gender'] = 'male'
huxn['gender'] = 'feamle'//imp->yha hamne change kar diya gender ko  
huxn[symbol1] = 'alex'


huxn[symbol2] = 'john'
// huxn[symbol1] = 'john'

console.log(huxn);