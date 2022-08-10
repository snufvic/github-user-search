import { Routes, Route, BrowserRouter } from "react-router-dom";
import Alert from "./components/layout/alert";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import PageNotFound from "./components/pages/pageNotFound";
import User from "./components/pages/user";
import { AlertProvider } from "./context/alert/alertContext";
import { GithubProvider } from "./context/github/githubContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
