import {useTheme} from 'app/providers/ThemeProvider/lib/useTheme';
import {classNames} from 'shared/lib/classNames/classNames';
import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import 'app/styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default App;
