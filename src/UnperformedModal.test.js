import React from 'react';
import { shallow } from 'enzyme';

import UnperformedModal from './UnperformedModal';

describe('<UnperformedModal />', () => {
    const props = {
        show: true,
        close: () => { },
        classes: {},
        activities: []
    }

    describe('component renders', () => {
        const wrapper = shallow(<UnperformedModal {...props} />);
        test('root', () => {
            expect(wrapper.find("[test-id='unperformed-modal-root']")).toHaveLength(1);
        })
        test('title', () => {
            expect(wrapper.find("[test-id='unperformed-modal-title']").text()).toEqual('Unperformed activities');
        })
        test('body', () => {
            expect(wrapper.find("[test-id='unperformed-modal-body']").text()).toEqual('The following activities were not performed due covid unfriendly status');
        })
        test('list', () => {
            expect(wrapper.find("[test-id='unperformed-modal-list']")).toHaveLength(1);
        })
        test('activities', () => {
            const extendedProps = {
                ...props,
                activities: [
                    'Activity1',
                    'Activity2',
                    'Activity3'
                ]
            }
            const extendedWrapper = shallow(<UnperformedModal {...extendedProps} />);
            expect(extendedWrapper.find("[test-id='unperformed-modal-activity']")).toHaveLength(3);
            expect(extendedWrapper.find("[test-id='unperformed-modal-activity']").at(0).text()).toEqual('Activity1')
            expect(extendedWrapper.find("[test-id='unperformed-modal-activity']").at(1).text()).toEqual('Activity2')
            expect(extendedWrapper.find("[test-id='unperformed-modal-activity']").at(2).text()).toEqual('Activity3')
        })
    })
})