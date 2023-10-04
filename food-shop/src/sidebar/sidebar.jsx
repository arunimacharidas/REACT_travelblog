import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'></div>
      <span className='sidebar-title'>TOURISM</span>
      <img
        className='sidebar-img'
        src='https://media.istockphoto.com/id/530741074/photo/red-fort-lal-qila-with-indian-flag-delhi-india.webp?b=1&s=612x612&w=0&k=20&c=DekRVB145U8TiKNRogAjb9TEfqP2SSdstqxbdfD3WF0='
        alt=''
      />
      <p>
        Cultural Diversity: India is known for its incredible cultural diversity. Each region has its own distinct traditions,
        languages, festivals, and cuisine. Tourists have the opportunity to explore and experience a wide variety of cultures within one country.
      </p>
      <div className='sidebar-item'></div>
      <div className='sidebar-title'>CATEGORIES</div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>kerala</li>
        <li className='sidebar-list-item'>manali</li>
        <li className='sidebar-list-item'>kashmir</li>
        <li className='sidebar-list-item'>thailand</li>
        <li className='sidebar-list-item'>bali</li>
      </ul>

      <div className='sidebar-item'></div>
      <span className='sidebar-title'>FOLLOW US</span>
      <div className='sidebar-social'>
        <i className="sidebar-icon fa-brands fa-facebook"></i>
        <i className="sidebar-icon fa-brands fa-twitter"></i>
        <i className="sidebar-icon fa-brands fa-pinterest"></i>
        <i className="sidebar-icon fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}

export default Sidebar;

