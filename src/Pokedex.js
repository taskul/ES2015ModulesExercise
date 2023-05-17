import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({pokeData}) => {
    return (
        <div className='Pokedex'>
            <h1>Pokedex</h1>
            <div className='Pokedex-box'>
                {pokeData.map(p => (
                    <Pokecard 
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    base_experience={p.base_experience}
                    />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;