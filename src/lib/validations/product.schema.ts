import { z } from "zod"
import { Color, Size, Sleeve } from "../../services/type"
import { getValues } from "../enum"

export const AttributeSchema = z.object({
  color: z.enum(getValues(Color), {
    errorMap: () => ({
      message: 'Please select your color',
    }),
  }),
  size: z.enum(getValues(Size), {
    errorMap: () => ({
      message: 'Please select your size',
    }),
  }),
  sleeve: z.enum(getValues(Sleeve), {
    errorMap: () => ({
      message: 'Please select your color',
    }),
  }),
})

export const ProductDetailsSchema = z.object({
  name: z.string({
    required_error: "Name must be string",
  }),
  price:  z.number({
    required_error: "price must be number",
  }),
  availableStock:  z.number({
    required_error: "availableStock must be number",
  }),
})


export const GroupProductSchema = z.object({
  group: z.string({
    required_error: "Group is required",
  })
})

export const ProductSchema=AttributeSchema.extend({ProductDetailsSchema})

export type AttributeInput = z.infer<typeof AttributeSchema>
export type ProductDetailsInput = z.infer<typeof ProductDetailsSchema>
export type ProductUserInput = z.infer<typeof ProductSchema>
export type GroupProductInput = z.infer<typeof GroupProductSchema>