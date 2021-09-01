import React from 'react';
import { useActions } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previousCellId }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small is-dark"
          onClick={() => insertCellAfter(previousCellId, 'code')}>
          <span>New</span>
          <span className="icon is-small">
            <i className="fas fa-code is-bold"></i>
          </span>
          {/* <i className="fas fa-plus"></i> */}
        </button>
        <button
          className="button is-rounded is-warning is-small is-light"
          onClick={() => insertCellAfter(previousCellId, 'text')}>
          <span>New</span>
          <span className="icon is-small">
            <i className="fab fa-markdown is-bold"></i>
          </span>
          {/* <i className="fas fa-plus"></i> */}
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
