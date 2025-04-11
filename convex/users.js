import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    // User already exists
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    // User doesn't exist
    if (user[0]?.email) {
      const result = await ctx.db.insert("users", {
        name: args.name,
        email: args.name,
        pictureURL: args.pictureURL,
        credits: 10,
      });

      return result;
    }

    return user[0];
  },
});
