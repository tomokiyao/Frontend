import { usePersist } from '../../hooks';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DeleteForm from './DeleteForm';
import Memo from './Memo';

const MemoPage = () => {
  const [mode] = usePersist('mode', 'default');

  return (
    <div>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
        <AddForm />
        <FindForm />
        <DeleteForm />
      </div>
      <Memo />
    </div>
  );
};

export default MemoPage;
