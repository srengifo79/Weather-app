import { ThemeProvider } from 'styled-components';
import './App.css';
import { defaultTheme } from './theme';

import { ErrorBoundary, Layout } from './components';
import { MainPage } from './components/pages';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <Layout>
          <MainPage />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
