import { FC, useEffect, useState } from 'react'
import { SidebarData } from './SidebarData'
import Submenu from './Submenu'
import { Logo } from '../../assets/logos'
import { useLocation, useNavigate } from 'react-router-dom'
import SidebarFooter from './SidebarFooter'

const Sidebar: FC = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const { pathname } = useLocation()
  const [sidebarShow, setSidebarShow] = useState(
    window.matchMedia('(max-width: 648px)').matches,
  )
  const [match, setMatch] = useState(
    window.matchMedia('(max-width: 1025px)').matches,
  )
  useEffect(() => {
    window
      .matchMedia('(max-width: 1025px)')
      .addEventListener('change', m => setMatch(m.matches))

    return () => {
      window
        .matchMedia('(max-width: 1025px)')
        .removeEventListener('change', m => setMatch(m.matches))
    }
  }, [match])

  return (
    <aside className={'sidebar-nav' + (sidebarShow ? ' hidden' : '')}>
      <a className='logo-wrapper' href="/">
        <img
          width={'80%'}
          src={Logo}
        />
      </a>
      <div className="sidebar-items-wrapper">
        {SidebarData.map((item, index) => {
          return <Submenu match={match} path={item.path} title={item.title} key={index} />
        })}
      </div>
      <SidebarFooter match={match} />
    </aside>
  )
}

export default Sidebar
