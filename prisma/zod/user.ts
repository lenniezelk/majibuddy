import * as z from "zod"
import { CompletePassword, RelatedPasswordModel, CompleteNote, RelatedNoteModel, CompleteSetting, RelatedSettingModel, CompleteEntry, RelatedEntryModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  password?: CompletePassword | null
  notes: CompleteNote[]
  settings: CompleteSetting[]
  entries: CompleteEntry[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  password: RelatedPasswordModel.nullish(),
  notes: RelatedNoteModel.array(),
  settings: RelatedSettingModel.array(),
  entries: RelatedEntryModel.array(),
}))
