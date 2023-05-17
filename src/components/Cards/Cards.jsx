import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div style={{display:'flex', justifyContent:"space-between"}}>
         {characters.map(characters => (
            <Card
               name= {characters.name}
               species= {characters.species}
               gender= {characters.gender}
               image= {characters.image}
             />
         ))}
      </div>
   );
}
