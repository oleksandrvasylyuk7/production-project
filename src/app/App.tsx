import {Link} from 'react-router-dom';
import {useTheme} from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import 'app/styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Головна</Link>
      <Link to='/about'>Про сайт</Link>
      <AppRouter />
    </div>
  )
}

export default App;
