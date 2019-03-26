import React from 'react'
import Horizontal from './Horizontal'
import { mount, configure } from 'enzyme'
import { TextScrollProp, Mode } from 'interface'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
// import render from 'preact-render-to-json'

configure({ adapter: new Adapter() })

describe('render', () => {
  const data: string[] = [
    '还是上面的例子，我们将transition属性合并，并扩展几个浏览器，如下CSS代码：',
    '向上滚动动画',
    '向上滚'
  ]

  it('renders three <span/> components', () => {
    const props: TextScrollProp = { mode: Mode.horizontal, text: data, speed: 5000 }
    const wrapper = mount(<Horizontal {...props} />)
    // console.log(toJson(wrapper.find('span')))
    expect(wrapper.find('span')).toHaveLength(3)
  })

})