import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../Containers'

Enzyme.configure({ adapter: new Adapter() })

describe('My Todo App', function () {
  /** mock some function */
  /** const onSomeFunctionChange = jest.fn(); */

  let wrapper

  beforeEach(() => {
    wrapper = mount(<App/>)
  })

  it('renders without crashing v1', () => {
    //console.log(wrapper.debug())
    expect(wrapper).not.toBeNull()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})