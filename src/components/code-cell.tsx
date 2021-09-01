import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useCumulativeCode } from '../hooks/use-cumulative-code';

import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import './code-cell.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

interface CodeCellProps {
  cell: Cell;
}

// Provides just under 1 second between keystrokes before attempting to refresh the render
const renderDebounceSeconds = 750;

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, renderDebounceSeconds);

    return () => {
      // todo - is console.clear() a good idea?
      console.clear();
      clearTimeout(timer);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, cell.content, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value || '')}
          />
        </Resizable>
        <div className="progress-wrapper">
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} bundleError={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
