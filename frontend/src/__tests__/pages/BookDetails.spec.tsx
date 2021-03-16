import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BookDetails from '../../pages/BookDetails';
import Header from '../../components/Header';

jest.mock('../../services/api');

configure({ adapter: new Adapter() });
describe('BookDetails Page', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BookDetails />);
  });

  it('should be able to render', () => {
    expect(component.length).toBe(1);
  });

  it('should be render a Header', () => {
    const wrapper = shallow(<Header />);
    const a = wrapper.find('a');
    const result = a.text();

    expect(result).toBe('TAG');
  });

  // it('should be able to render', done => {
  //   const wrapper = shallow(<BookDetails />);

  //   setTimeout(() => {
  //     wrapper.update();

  //     expect(wrapper.find('Descriptions')).toBeTruthy();

  //     done();
  //   });
  // });
});
