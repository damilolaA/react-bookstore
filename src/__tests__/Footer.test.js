import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Footer from '../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () => {

	it('should render component correctly', () => {
		const wrapper = shallow( <Footer/> );

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});