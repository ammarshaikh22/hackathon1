import { type SchemaTypeDefinition } from 'sanity'
import { newProducts } from './newProducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newProducts],
}
