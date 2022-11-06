import React from 'react'
import { Link } from 'react-router-dom';

export const HeroResult = ({id,superhero, publisher, alter_ego, first_appearance, characters}) => {
const imgUrl = '../assets/dc-arrow.jpg';

  return (
    <div 
        className="container fluid"> 
        <div className="row border container g-0 animate__animated animate__fadeIn">
            <img src={`/src/assets/${id}.jpg`} className="col-5" alt={superhero} />
            <div className="card-body col-7">
                <h5 className="card-title ps-2">{superhero}</h5>
                <p className="card-text ps-2">{alter_ego}</p>
                {
                    (alter_ego !== characters) && (<p className="card-text ps-2">{characters}</p>)
                }
                <p className="card-text ps-2"><small className='text-muted'>{first_appearance} </small></p>

                <Link to={`/hero/${id}`} className='ps-2'> Mas..</Link>
            </div>
        </div>

    </div>
  )
}
