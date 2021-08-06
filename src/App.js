import Header from './components/Header';
import './App.css';
import Routes from './Routes';
import { BeerProvider } from './providers/beer-list';
import { WeddingProvider } from './providers/wedding';
import { ConfraternizationProvider } from './providers/confraternization';
import { GraduationProvider } from './providers/graduation';

function App() {
  return (
    <div className="App">
      <BeerProvider>
        <WeddingProvider>
          <ConfraternizationProvider>
            <GraduationProvider>
              <Header />
              <Routes />
            </GraduationProvider>
          </ConfraternizationProvider>
        </WeddingProvider>
      </BeerProvider>
    </div>
  );
}

export default App;
