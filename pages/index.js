import 'react-pro-sidebar/dist/css/styles.css'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import { Add } from '../assets/Icons/add'
import { UilPlusCircle } from '@iconscout/react-unicons'

export default function Home() {
  return (
    <>
      <Sidebar />
      <Button type="primary" label="Button" icon={<Add fill="white-100"/>} />
    </>
  )
}

