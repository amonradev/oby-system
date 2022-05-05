import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/access/Login';
import { Register } from './pages/access/Register';

ReactDOM.render(
    <BrowserRouter>
    	<Routes>
			<Route path="/" element={<Login />} />
			<Route path='/cadastro' element={<Register />} />
		</Routes>
    </BrowserRouter>,
  document.getElementById('root')
)
