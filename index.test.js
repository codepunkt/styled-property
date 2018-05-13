import React from 'react'
import styled from 'styled-components'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import styledProperty from './index'

configure({ adapter: new Adapter() });

const StyledComponent = styled.div`
  color: #c0ff33;
`

describe('styledProperty', () => {
  test('adds outer style className as property of wrapped component', () => {
    const propertyName = 'role'
    const StyledProp = styledProperty(StyledComponent, propertyName)`
      color: #bada55;
    `

    const wrapper = mount(<StyledProp />)
    const { className } = wrapper.find('PassClassAsPropName').get(0).props
    const property = wrapper.find('div').get(0).props[propertyName]
    expect(property).toEqual(className)
  })
})