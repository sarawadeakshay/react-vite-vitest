import useExpandCollapse from '../stores/expandCollapseStore';

const SideNav = () => {
  const isExpandMode = useExpandCollapse((state: any) => state.isExpandMode);
  return (
    <div className={ !isExpandMode ? 'side-nav' : 'side-nav collapse'}>
      <div className={!isExpandMode ? 'nav-link-wrapper' : 'nav-link-wrapper nav-link-wrapper-collapse'}>
        <div className='nav-link'>Getting Started</div>
        <div className='nav-link'>Introduction</div>
        <div className='nav-link'>Documentation</div>
        <div className='nav-link'>APIs</div>
        <div className='nav-link'>Testing</div>
        <div className='nav-link'>Collection</div>
        <div className='nav-link'>Advantages</div>
        <div className='nav-link'>When to use</div>
      </div>
    </div>
    );
}

export default SideNav;
