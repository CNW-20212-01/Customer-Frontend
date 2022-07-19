import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import BookContent from './components/BookContent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MainApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />}></Route>
                <Route path="/book_content" element={<BookContent />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
