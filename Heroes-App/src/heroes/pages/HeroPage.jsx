import { useMemo } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";


export const HeroPage = () => {
  const {id} = useParams();
  const hero = useMemo(() => getHeroeById(id), [id])
  const navigate = useNavigate()
  const onNavigateBack = () =>{
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div 
        className="container d-flex my-2"> 
        <div className="container d-flex p-0 ">
            <img src={`/src/assets/${id}.jpg`} className="me-3 img-thumbnail p-0 animate__animated animate__fadeIn" alt={hero.superhero} />
            <div className="card-body animate__animated animate__fadeInRight">
                <h5 className="card-title ps-2 h1 my-3">{hero.superhero}</h5>
                <p className="card-text ps-2 h3 my-3">Alter ego: {hero.alter_ego}</p>
                {
                    (hero.alter_ego !== hero.characters) && (<p className="card-text ps-2 my-3 h3">Characters: {hero.characters}</p>)
                }
                <p className="card-text ps-2 my-3"><small className='text-muted h4'>First appearance: {hero.first_appearance} </small></p>
                <button
                  className="btn btn-outline-primary my-3 ms-2"
                  onClick={() => onNavigateBack ()}>
                  Regresar
              </button>
            </div>

        </div>
        

    </div>
  )
}
