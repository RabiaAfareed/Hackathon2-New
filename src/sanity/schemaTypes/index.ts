import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import landingPage from './landingPage-sections/landingPage'
import hero from './landingPage-sections/hero'
import Creamics from './landingPage-sections/Creamics'
import ProductPage from './Product_Page_section/ProductPage'
import cardsSection from './Product_Page_section/cardsSection'
import PopularProducts from './landingPage-sections/PopularProducts'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,
          Category,
          landingPage,
          hero,
          Creamics,
          PopularProducts,
          ProductPage,
          cardsSection,
  ],

}
