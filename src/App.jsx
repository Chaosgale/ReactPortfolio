import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  const currentPage = useLocation().pathname;

  return (
    <MantineProvider>
      <div>
        <Header>
          <Nav currentPage={currentPage} />
        </Header>
        <main>
          <Page currentPage={currentPage} />
        </main>
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
