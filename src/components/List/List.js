import React from 'react'
import data from '../../StaticData/data'

function List({people}) {
  return (
    <>
    {
    people.map((person)=>(
      <article className='person' key={person.id}>
        
        <img src={person.img} alt='' />
    <div>
        <h4>
            {person.name}
        </h4>
        <p>
            {person.age}
        </p>
    
    
    </div>

</article>
    ))
    
    }
    </>
  )
}

export default List
