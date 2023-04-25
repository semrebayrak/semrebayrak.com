import { useEffect, useState } from 'react'
import { SidebarFooterData } from './SidebarFooterData'

const SidebarFooter = ({ match }: any) => {

  useEffect(() => {
    if (match) {
      var els = document.getElementsByClassName(
        'slide-out-left',
      ) as HTMLCollection
      Array.from(els).forEach(e => {
        setTimeout(() => e.classList.add('no-display'), 500)
      })
    }
  }, [match])

  return (
    <div className="sidebar-footer">
      <div className="socials">
        {SidebarFooterData.map((item, index) => (
          <a key={index} href={item.link} target={'_blank noreferrer'}>
            <div className='no-shrink'>
              {item.icon}
            </div>
            <p className={match ? 'slide-out-left' : 'slide-out-right'}>
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SidebarFooter
