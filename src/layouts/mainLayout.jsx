import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div>
      {/* <div>Header</div> */}
      <Outlet />
      {/* <div>Footer</div> */}
    </div>
  )
}

export default Root