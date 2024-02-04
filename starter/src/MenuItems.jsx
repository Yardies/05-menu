import { unmountComponentAtNode } from 'react-dom'
export const MenuItems = ({
  id,
  img,
  price,
  category,
  title,
  desc,
  setNewMenu,
  removeItem,
}) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
      <button
        onClick={() => {
          removeItem(id)
        }}
      >
        remove item
      </button>
      <button
        onClick={() => {
          setNewMenu([])
        }}
      >
        remove items
      </button>
    </article>
  )
}
