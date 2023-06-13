import useExpandCollapse from '../stores/expandCollapseStore';

const ExpandCollapse = () => {
  const isExpandMode = useExpandCollapse((state: any) => state.isExpandMode);
  const setIsExpandMode = useExpandCollapse((state: any) => state.setIsExpandMode);

  const onBtnClick = () => {
    setIsExpandMode();
  };

  return (
    <div className='expand-collapse'>
      {!isExpandMode && 
        <button
          className='btn expand-btn'
          type='button'
          onClick={onBtnClick}
        >
          Expand
        </button>
      }
      {isExpandMode && 
        <button
          className='btn collapse-btn'
          type='button'
          onClick={onBtnClick}
        >
          Collapse
        </button>
      }
    </div>
  );
};

export default ExpandCollapse;
