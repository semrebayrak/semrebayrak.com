import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarItemProps } from '../../models/SidebarItem'

const Submenu: FC<SidebarItemProps> = ({ path, title, match }: SidebarItemProps) => {
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (path === location.pathname) setActive(true)
    else setActive(false)
  }, [location.pathname, path])
  return (
    <Link
      to={path}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setActive(true)}
      className={
        'sidebar-link ' +
        (active || hover ? 'scale-up-center active' : 'scale-down-center')
      }
    >
      <span className="label">{match ? title.substring(0, 1) : title}</span>
    </Link>
  )
}

export default Submenu
