import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center p-4'>
            <img className='mx-auto mb-2' src={logo} alt="" />
            <p className='text-xl mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl mb-2'>{moment().format('dddd ,MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;