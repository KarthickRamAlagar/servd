"use client";

import { useParams } from "next/navigation";
import RecipeGrid from "@/components/RecipeGrid";
import { getMealByCategory } from "@/actions/mealdb.actions";

export default function CategoryRecipesPage() {
  const params = useParams();
  const category = params.category;

  return (
    <RecipeGrid
      type="category"
      value={category}
      fetchAction={getMealByCategory}
      backLink="/dashboard"
    />
  );
}
