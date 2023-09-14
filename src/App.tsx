export type Movie = {
  id: number
  titulo: string
  descricao: string
  imagemPoster: string
  imagemBackgroud: string
  dataLançamento: string
  avaliacaoFilme: number
}
// categoria: string
// elenco: []

function App() {
  return (
    <div>
      <h1>ola React</h1>
      {/* <p>https://image.tmdb.org/t/p/original/</p> URL para pegar as imagens da api TMDB  */}
    </div>
  )
}

export default App
