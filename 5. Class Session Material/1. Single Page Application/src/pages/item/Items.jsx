import React from 'react'
import { Outlet } from 'react-router-dom'
import { getItems } from './data/items'
import ItemRow from './ItemRow'

function Items() {
  const items = getItems()

  return (
    <>
      <h1>Item Page</h1>
      <p>Select an item to be shown</p>

      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Action</th>
          </tr>

          {
            items.map(item => (
              <ItemRow key={item.id} item={item} />
            ))
          }
        </tbody>
      </table>

      <Outlet />
    </>
  )
}

export default Items