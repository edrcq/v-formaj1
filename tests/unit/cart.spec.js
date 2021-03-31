
import { shallowMount, mount } from '@vue/test-utils'
import Cart from '@/components/Cart.vue'

const one_product = (id, name, price) => ({ id, name, price })
const pa = one_product(1, 'Produit A', 5)
const pb = one_product(2, 'Produit B', 10)
const pc = one_product(3, 'Produit C', 20)

describe('Cart.vue', () => {
  it('check if first product is visible in the cart', () => {
    
    const rawList = [pa, pa]
    const wrapper = shallowMount(Cart, {
      propsData: { rawList }
    })

    const spanArray = wrapper.findAll('span')
    const firstProduct = spanArray.at(0)
    expect(firstProduct.text()).toMatch(pa.name)
  })

  it('is total good ?', () => {
    
    const rawList = [pa, pa, pb]
    const wrapper = shallowMount(Cart, {
      propsData: { rawList }
    })

    expect(wrapper.vm.total).toBe(20)
    
  })

//   it('click purchase button', () => {

//     const onClickPurchase = jest.fn()

//     const rawList = [pa, pa, pb]
//     const wrapper = mount(Cart, {
//       propsData: { rawList },
//       listeners: {
//           click: onClickPurchase
//       }
//     })

//     wrapper.vm.purchase = jest.fn()
//     wrapper.trigger('click')
//     wrapper.find('button').trigger('click')
//     expect(wrapper.vm.purchase).toHaveBeenCalled();

//   })
})
