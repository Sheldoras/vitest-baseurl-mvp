import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('renders the msg prop correctly', () => {
        const wrapper = mount(HelloWorld)

        // Check the rendered text inside the <h1>
        expect(wrapper.find('h1').text()).toBe('/happyface')
    })
})
