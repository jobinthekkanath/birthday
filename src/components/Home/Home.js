import React from 'react'
import List from '../List/List'
import {data} from '../../StaticData/data'
import { useState } from 'react'

function Home() {

    const [people, setPeople] = useState(data)

  return (
    <main>
        <section className='container'>
            <h3>{people.length}-Birthday Today</h3>
            <List people={people}/>
            <button onClick={()=>setPeople([])}>Clear All</button>

        </section>
    </main>
  )
}

export default Home
