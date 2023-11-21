import { mount } from '@vue/test-utils';
import RoverResults from '@/components/RoverResult.vue';
/* eslint-disable */
describe('RoverResults.vue', () => {
  it('renders rover results correctly', () => {

    const roverResult = {
      initialPosition: '1 2 N',
      instructions: 'LMLMLMLMM',
      finalPosition: '1 3 N',
    };

 
    const wrapper = mount(RoverResults, {
      propsData: {
        roverResult,
      },
    });

    expect(wrapper.find('h2').text()).toBe('Resultados do Rover');
    expect(wrapper.find('p:nth-child(1)').text()).toBe(`Posição de Pouso: ${roverResult.initialPosition}`);
    expect(wrapper.find('p:nth-child(2)').text()).toBe(`Instrução: ${roverResult.instructions}`);
    expect(wrapper.find('p:nth-child(3)').text()).toBe(`Posição Final: ${roverResult.finalPosition}`);
  });
});
/* eslint-enable */