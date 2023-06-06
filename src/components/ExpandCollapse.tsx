import useExpandCollapse from '../stores/expandCollapse';

const ExpandCollapse = () => {
  const isExpandMode = useExpandCollapse((state: any) => state.isExpandMode);
  const setIsExpandMode = useExpandCollapse((state: any) => state.setIsExpandMode);

  const onBtnClick = (type: string) => {
    setIsExpandMode();
  };

  console.log('isExpandMode: ', isExpandMode);

  return (
    <div className='expand-collapse'>
      {!isExpandMode && 
        <button
          className='btn expand-btn'
          type='button'
          onClick={() => onBtnClick('expand')}
        >
          Expand
        </button>
      }
      {isExpandMode && 
        <button
          className='btn collapse-btn'
          type='button'
          onClick={() => onBtnClick('collapse')}
        >
          Collapse
        </button>
      }
    </div>
  );
};

export default ExpandCollapse;
