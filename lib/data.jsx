import data from "@/data/db.json";

export function FeaturedImage() {
  const sorted = data.sort((a, b) => b.likes - a.likes);
  return sorted.slice(0, 4);
}
console.log(FeaturedImage());
