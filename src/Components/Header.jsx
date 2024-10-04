import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center space-y-6'>
            <h1 className='text-7xl font-black'>The Daily News</h1>
            <p className='font-semibold text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='font-bold'>{moment().format("MMM Do YY")}</p>
        </div>
    );
};

export default Header;