import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BookList from '../../pages/BookList';
import Header from '../../components/Header';
import Card from '../../components/Card';

jest.mock('../../services/api');

configure({ adapter: new Adapter() });
describe('BookList Page', () => {
  it('should be able to render', done => {
    const wrapper = shallow(<BookList />);

    setTimeout(() => {
      wrapper.update();

      expect(wrapper.find('Card')).toBeTruthy();

      done();
    });
  });

  it('should be render a Header', () => {
    const wrapper = shallow(<Header />);
    const a = wrapper.find('a');
    const result = a.text();

    expect(result).toBe('TAG');
  });

  it('should be render a Header', () => {
    const wrapper = shallow(
      <Card>
        <div>alo</div>
      </Card>,
    );
    const div = wrapper.find('div');
    const result = div.text();

    expect(result).toBe('alo');
  });
});
