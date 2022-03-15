import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Teste from './components/button/TrapBtn';
import Wrapper from './components/wrapper/Wrapper';
import Outlined from './components/button/OutlinedTrapBtn';

function App() {
  return (
    <Wrapper>
      <Teste
        color={['rgba(79, 50, 0, 1)', 'rgba(19, 14, 6, 1)']}
        font={[
          '1.2rem',
          'Playfair Display',
          'rgba(255, 247, 234, 1)',
          'rgba(244, 156, 4, 1)',
        ]}
      />
      <div className='ps-2'>
        <button className='btn btn-success'>TrapButton</button>
      </div>
    </Wrapper>
  );
}

export default App;
