import About from '../pages/About'
import Experience from '../pages/Experience'
import Skills from '../pages/Skills'
import MainPage from '../pages/MainPage'
import ContactMe from '../pages/ContactMe'
import { FC } from 'react'
import Portfolio from '../pages/Portfolio'

export interface routeTypes {
  path: string
  Component: FC
}

export const routes: routeTypes[] = [
  {
    path: '/',
    Component: MainPage,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/experience',
    Component: Experience,
  },
  {
    path: '/skills',
    Component: Skills,
  },
  {
    path: '/portfolio',
    Component: Portfolio,
  },
  {
    path: '/contact',
    Component: ContactMe,
  },
]
