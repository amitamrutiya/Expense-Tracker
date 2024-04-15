import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route
          path='/transaction/:id'
          element={<TransactionPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
