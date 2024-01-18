import * as z from "zod";

import { CompleteUser, RelatedUserModel } from "./index";

export const SettingModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  key: z.string(),
  value: z.string(),
});

export interface CompleteSetting extends z.infer<typeof SettingModel> {
  user: CompleteUser;
}

/**
 * RelatedSettingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSettingModel: z.ZodSchema<CompleteSetting> = z.lazy(() =>
  SettingModel.extend({
    user: RelatedUserModel,
  }),
);
