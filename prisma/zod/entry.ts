import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const EntryModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
})

export interface CompleteEntry extends z.infer<typeof EntryModel> {
  user: CompleteUser
}

/**
 * RelatedEntryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEntryModel: z.ZodSchema<CompleteEntry> = z.lazy(() => EntryModel.extend({
  user: RelatedUserModel,
}))
