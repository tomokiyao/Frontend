import { usePersist } from '../../hooks';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DeleteForm from './DeleteForm';
import Memo from './Memo';

const MemoPage = () => {
  const [mode, setMode] = usePersist('mode', 'default');
  const [memo, setMemo] = usePersist('memo', []);
  const [fMemo, setFMemo] = usePersist('findMemo', []);

  return (
    <div>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
        <AddForm memo={memo} setMemo={setMemo} />
        <FindForm setMode={setMode} memo={memo} setFMemo={setFMemo} />
        <DeleteForm memo={memo} setMemo={setMemo} />
      </div>
      <Memo mode={mode} memo={memo} fMemo={fMemo} />
    </div>
  );
};

export default MemoPage;
