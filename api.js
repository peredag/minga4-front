let apiUrl = 'http://localhost:8000/'

if (import.meta.env.NODE_ENV ==='production' ) { //process.env.NODE_ENV ==='production' --> ver asi era antes
 apiUrl = import.meta.env.VITE_API           //apiUrl = process.env.REACT_APP_API --> ver asi era antes
}
export default apiUrl

//condicional, si la variable de entorno es production, es decir esta hosteada
//entonces va a ser REACT_APP_API , si esto no ocurre entoces sera http://localhost:8000/

