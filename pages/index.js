import 'react-pro-sidebar/dist/css/styles.css'
import Sidebar from '../components/Sidebar'
import Accordion from '../components/accordion'
// import Button from '../components/Button'
// import { Add } from '../assets/Icons/add'
// import { UilPlusCircle } from '@iconscout/react-unicons'

export default function Home() {
  return (
    <>
      <Sidebar />
      {/* <Button type="primary" label="Button" icon={<Add fill="white-100"/>} /> */}
      <Accordion title="What is your return policy?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Accordion>
      <Accordion title="What is your return policy?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Accordion>
    </>
  )
}

