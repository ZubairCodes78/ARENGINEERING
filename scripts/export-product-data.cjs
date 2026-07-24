/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const root = process.cwd();

function loadTsModule(relativePath) {
  const absolutePath = path.join(root, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;

  const sandboxModule = { exports: {} };
  const sandbox = {
    exports: sandboxModule.exports,
    module: sandboxModule,
    require,
    __dirname: path.dirname(absolutePath),
    __filename: absolutePath,
  };
  vm.runInNewContext(compiled, sandbox, { filename: absolutePath });
  return sandbox.module.exports;
}

const productsModule = loadTsModule("src/lib/products.ts");
const constantsModule = loadTsModule("src/lib/constants.ts");

const outputDir = path.join(root, "tmp", "pdfs");
fs.mkdirSync(outputDir, { recursive: true });

const data = {
  company: constantsModule.COMPANY,
  products: productsModule.PRODUCTS.map((product) => ({
    ...product,
    machineSlug: productsModule.getMachineSlug(product.slug),
    images: productsModule.getProductImages(product),
  })),
};

fs.writeFileSync(path.join(outputDir, "product-data.json"), JSON.stringify(data, null, 2));
