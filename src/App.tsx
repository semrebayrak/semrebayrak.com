import './styles/styles.scss'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { routes, routeTypes } from './routes/routes'
import { FC } from 'react'
const App: FC = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <div className="main-body">
        <Routes>
          {routes.map(({ path, Component }: routeTypes, index: number) => {
            return <Route key={index} path={path} element={<Component />} />
          })}
        </Routes>
      </div>
    </>
  )
}

export default App
