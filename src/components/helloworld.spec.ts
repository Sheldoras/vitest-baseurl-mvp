import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('basurl built in constant works', () => {
        const wrapper = mount(HelloWorld)
        expect(wrapper.find('h1').text()).toBe('/happyface')
    })
    it('mode built in constant works', () => {
        const wrapper = mount(HelloWorld)
        expect(wrapper.find('h2').text()).toBe('test')
    })
    it('prod built in constant works', () => {
        const wrapper = mount(HelloWorld)
        expect(wrapper.find('h3').text()).toBe('false')
    })
})
