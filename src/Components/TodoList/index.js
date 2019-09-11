import React from 'react'

import Item from './Item'

export default function TodoList ({ itemsList }) {
  return itemsList.map(item => <Item key={item.id} {...item}/>)
}