import { readdirSync } from "fs";
import { join } from "path";

export default defineEventHandler(() => {
  const gallery = join(process.cwd(), "/public/img/gallery");
  const gallery_images = readdirSync(gallery);

  return gallery_images.map((image) => `/img/gallery/${image}`);
});
