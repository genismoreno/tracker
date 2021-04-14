import React from 'react';
import { shallow } from 'enzyme';

import { Activities } from './Activities';

describe('<Activities />', () => {
    const props = {
        classes: {}
    }

    describe('component renders', () => {
        const wrapper = shallow(<Activities {...props} />);
        test('title', () => {
            expect(wrapper.find("[test-id='activities-title']").text()).toBe('My 2020 Activities');
        })
        describe('table', () => {
            test('root', () => {
                expect(wrapper.find("[test-id='activities-table']")).toHaveLength(1);
            })

            describe('header', () => {
                test('root', () => {
                    expect(wrapper.find("[test-id='activities-header']")).toHaveLength(1);
                })
                describe('checkbox', () => {
                    test('exists', () => {
                        expect(wrapper.find("[test-id='activities-header-checkbox']")).toHaveLength(1);
                    })
                    test('!checked', () => {
                        expect(wrapper.find("[test-id='activities-header-checkbox']").childAt(0).props().checked).toBe(0);
                    })
                })
                test('name', () => {
                    expect(wrapper.find("[test-id='activities-header-name']").text()).toBe('Activity name');
                })
                test('covid friendly', () => {
                    expect(wrapper.find("[test-id='activities-header-cf']").text()).toBe('COVID friendly');
                })
                test('times', () => {
                    expect(wrapper.find("[test-id='activities-header-times']").text()).toBe('Times performed');
                })
            })
            describe('button', () => {
                test('exists', () => {
                    expect(wrapper.find("[test-id='activities-button']").text()).toBe('PERFORM!');
                })
                test('disabled', () => {
                    expect(wrapper.find("[test-id='activities-button']").props().disabled).toBe(true);
                })
            })
        })
    })
})