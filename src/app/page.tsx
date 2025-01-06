import React from 'react'
import { urlFor } from '@/sanity/lib/image'

import { client } from '@/sanity/lib/client'
import Image from 'next/image'

 const  Homepage = async() => {
     const query = `*[_type == 'blog']  `

const data:Blog[] = await client.fetch(query)


  return (
    <div  >
       
        {data.map((info)=>(
          <div key={info.slug}>
            <h1>{info.Title}</h1>
            <p>{info.Paragraph}</p>
            
            </div>
        ))}    

    </div>
  )
}

export default Homepage