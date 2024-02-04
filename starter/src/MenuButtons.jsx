export const MenuButtons = ({ menu, setText, setNewMenu }) => {
  const menues = Object.values(menu)
  const cat = menues.map((item) => {
    return item.category
  })
  const categories = [`all`, ...new Set(cat)]

  return (
    <div className="btn-container">
      {categories.map((cat) => {
        const handleClick = () => {
          let newMenu = []
          if (cat === `all`) {
            newMenu = menu
          } else {
            newMenu = menu.filter((item) => {
              return item.category === cat
            })
          }
          console.log(newMenu)
          setNewMenu(newMenu)
          setText(cat)
        }

        return (
          <button
            className="btn menu-btn"
            key={cat}
            onClick={() => {
              handleClick()
            }}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
