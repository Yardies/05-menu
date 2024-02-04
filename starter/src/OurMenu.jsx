import { useState } from 'react'
import { MenuButtons } from './MenuButtons'
import { MenuItems } from './MenuItems'
import { Title } from './Title'

export const OurMenu = ({ menu }) => {
  const [text, setText] = useState(`our menu`)
  const [newMenu, setNewMenu] = useState(menu)
  console.log(newMenu)

  const removeItem = (id) => {
    const newerMenu = newMenu.filter((item) => {
      return item.id !== id
    })
    setNewMenu(newerMenu)
  }

  return (
    <div className="menu">
      <Title text={text} />

      <MenuButtons menu={menu} setText={setText} setNewMenu={setNewMenu} />

      <div className="section-center">
        {newMenu.map((item) => {
          return (
            <MenuItems
              key={item.id}
              {...item}
              setNewMenu={setNewMenu}
              removeItem={removeItem}
            />
          )
        })}
      </div>
      <div></div>
    </div>
  )
}
