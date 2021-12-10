import Error404 from  "../../img/Error404.png"
import "./PageNotFound.css"

export const PageNotFound = () => {
  return (
    <div className="container-error-404">
      <img src={Error404} alt="Pagina no encontrada" />
      <p>Pagina no encontrada</p>
    </div>
  )
}
