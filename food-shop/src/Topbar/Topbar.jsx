import './Topbar.css'

function Topbar() {
  return (
    <div className='topposition'>
        <div className='Topleft'>
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-x-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
        </div>
        <div className='Topcenter'>
            <ul className='toplist'>
            <li className='toplistitem'>HOME</li>
            <li className='toplistitem'>ABOUT</li>
            <li className='toplistitem'>CONTACT</li>
            <li className='toplistitem'>WRITE</li>
            <li className='toplistitem'>LOGOUT</li>
            </ul>
        </div>
        <div className='Topright'>
            <img className="searchimg"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47eGNB4uktvhbGIeWWDPNl-0L1EBWByWRkg&usqp=CAU'alt=''/>
            <i className=" topsearch fa-solid fa-magnifying-glass"></i>
       
        </div>
    
    </div>
  )
}

export default Topbar
