import { mount } from '@vue/test-utils';
import MarsRoverForm from '@/components/MarsRoverForm.vue';
import mock from '../../jest.setup'
/* eslint-disable */
describe('MarsRoverForm.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MarsRoverForm);
  });

  afterEach(() => {
    mock.reset();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('submits the form', async () => {
   
    mock.onPost('/api/explore').reply(200, { data: {} });
  
    await wrapper.setData({
      plateauSize: '5 5',
      roverPosition: '1 2 N',
      roverInstructions: 'LMLMLMLMM',
    });
  
    const submitFormSpy = jest.spyOn(wrapper.vm, 'submitForm');
 
    await wrapper.vm.submitForm();
  
    expect(submitFormSpy).toHaveBeenCalled();
  
    const postData = JSON.parse(mock.history.post[0].data);
    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].url).toBe('/api/explore');
    expect(postData).toEqual({
      upperRightCoordinates: [5, 5],
      rovers: [{
        x: 1,
        y: 2,
        direction: 'N',
        instructions: 'LMLMLMLMM',
      }],
    });
  });
});
/* eslint-enable */