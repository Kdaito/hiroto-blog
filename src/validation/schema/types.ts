import { z } from "zod";
import { searchParamSchema, searchInputSchema } from "@/validation/schema";

export type SearchParamSchema = z.infer<typeof searchParamSchema>;
export type SearchInputSchema = z.infer<typeof searchInputSchema>;