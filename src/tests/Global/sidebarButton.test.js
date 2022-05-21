// import Enzyme, { shallow } from 'enzyme';
// import { SidebarButton } from '../../components/@Global/sidebar/SidebarButton';
// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({adapter: new Adapter()});

// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<SidebarButton name="Relatório Geral" page='home' action={() => setActive('home')} to='/pagina-inicial' />));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(0);
//   });
// });