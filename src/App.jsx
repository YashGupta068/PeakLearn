import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DataStructuresLanguages from './pages/DataStructuresLanguages';
import Home from './pages/Home';
import Practice from './pages/Practice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Topics from './pages/Topics';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/data-structures" element={<DataStructuresLanguages />} />
          <Route path="/practice/:topic" element={<Practice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
