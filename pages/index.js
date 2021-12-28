import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button'
import { UilPlusCircle } from '@iconscout/react-unicons'

export default function Home() {
  return (
    <>
      <Sidebar />
      <Button error size="medium" label="Button" icon={<UilPlusCircle />} />
    </>
  )
}
