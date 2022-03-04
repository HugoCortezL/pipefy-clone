import React from 'react'

import { MdAdd } from 'react-icons/md'

import Card from '../Card'

import { Container } from './styles'

export default function List({data}) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {
          data.creatable && (
            <button tyepe="button">
              <MdAdd size={24} color="#FFFFFF"/>
            </button>
          )
        }
      </header>

      <ul>
        {data.cards.map(card => <Card key={card.id} data={card}/>)}
      </ul>

    </Container>
  )
}
