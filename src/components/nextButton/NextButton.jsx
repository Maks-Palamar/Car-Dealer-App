import { Link } from 'react-router-dom';

<button
  className={`p-2 bg-blue-500 text-white ${!isButtonEnabled ? 'opacity-50' : ''}`}
  disabled={!isButtonEnabled}
>
  <Link to={`/result/${selectedMake}/${selectedYear}`}>
    Next
  </Link>
</button>
