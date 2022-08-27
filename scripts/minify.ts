import { minify } from "terser";
import path from "path";
import fs from "fs/promises";

const distPath = path.resolve(__dirname, "..", "dist");

async function minifyFile(filePath: string) {
  const fileName = path.basename(filePath);
  console.log(`minifying ${fileName}...`);
  const code = await fs.readFile(filePath, "utf8");
  try {
    const result = await minify(code);
    if (!result.code) throw new Error("No code");
    await fs.writeFile(filePath, result.code);
    console.log(`✅ minified ${fileName}`);
  } catch (error) {
    console.error(error);
  }
}

async function minifyFiles(dir: string) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for await (const file of files) {
    if (file.isDirectory()) await minifyFiles(path.resolve(dir, file.name));
    else if (file.isFile() && file.name.endsWith(".js"))
      await minifyFile(path.resolve(dir, file.name));
  }
}

minifyFiles(distPath)
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.error(error);
  });
