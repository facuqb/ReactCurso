import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./"



export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row rows-cols-1 rows-cols-md-2 g-4">

                {heroes.map(heroe => (
                <HeroCard {...heroe} key={heroe.id} />))}
    </div>
  )
}
