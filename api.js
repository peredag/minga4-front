let apiUrl = 'http://localhost:8000/'

if (process.env.NODE_ENV ==='production' ) { //condicional, si la variable de entorno es production, es decir esta hosteada
 apiUrl = process.env.REACT_APP_API         //entonces va a ser REACT_APP_API , si esto no ocurre entoces sera http://localhost:8000/
}
export default apiUrl
