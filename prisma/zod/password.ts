import * as z from "zod";

import { CompleteUser, RelatedUserModel } from "./index";

export const PasswordModel = z.object({
  hash: z.string(),
  userId: z.string(),
});

export interface CompletePassword extends z.infer<typeof PasswordModel> {
  user: CompleteUser;
}

/**
 * RelatedPasswordModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPasswordModel: z.ZodSchema<CompletePassword> = z.lazy(() =>
  PasswordModel.extend({
    user: RelatedUserModel,
  }),
);
