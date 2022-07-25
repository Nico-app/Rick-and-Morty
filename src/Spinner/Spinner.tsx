import { FaSpinner } from 'react-icons/fa';
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='spinnerIcon'>
      <FaSpinner className="spinning" size={60}/>
    </div>
  )
}
