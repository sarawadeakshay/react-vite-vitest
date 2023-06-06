import useExpandCollapse from '../stores/expandCollapse';

const MainContainer = () => {
  const isExpandMode = useExpandCollapse((state: any) => state.isExpandMode);
  return (
    <div className={ !isExpandMode ? 'main-container' : 'main-container expand'}>
      Main Container
    </div>
  );
};

export default MainContainer;
