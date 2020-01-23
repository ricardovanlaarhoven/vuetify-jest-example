import {createLocalVue, mount, shallowMount} from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import CategorySelector from '../../src/components/CategorySelector.vue';
import DocumentCategories from '../../src/store/modules/DocumentCategories.js';

jest.mock('./../../src/api/documentCategories/getAll');
const localVue = createLocalVue();
describe('GlobalSearch.vue', () => {
    let vuetify;
    let store;

    beforeEach(() => {
        vuetify = new Vuetify();
        store = new Vuex.Store({
            modules: {DocumentCategories},
        });
    });

    it('matches ui', async () => {
        const wrapper = mount(CategorySelector, {
            localVue,
            vuetify,
            store,
        });
        await flushPromises();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('matches ui when a headcategory', async () => {
        const wrapper = mount(CategorySelector, {
            localVue,
            vuetify,
            store,
            propsData: {
                value: 9,
            },

        });
        await flushPromises();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('matches ui when a subcategory is set', async () => {
        const wrapper = mount(CategorySelector, {
            localVue,
            vuetify,
            store,
            propsData: {
                value: 17,
            },
        });
        await flushPromises();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('matches ui when using shallowMount', async () => {
        const wrapper = shallowMount(CategorySelector, {
            localVue,
            vuetify,
            store,
            propsData: {
                value: 17,
            },
        });
        await flushPromises();
        expect(wrapper.html()).toMatchSnapshot();
    });
});
