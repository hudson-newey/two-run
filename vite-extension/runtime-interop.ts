const compiledRustModules = new Map<string, string>();

const moduleNameGenerator = generateModuleName();

export function compileRust(src: string, id: string): string {
  const existingModule = compiledRustModules.get(id);
  if (existingModule) return existingModule;

  const bindingCode = generateBindingCode(src, id);
  compiledRustModules.set(id,  bindingCode);

  return bindingCode;
}

function generateBindingCode(src: string, id: string): string{
  const rustModuleName = moduleNameGenerator.next();
  return `
${src}

${id}

const message = 'Hello World!';
export { message };
`;
}

function* generateModuleName() {
  let nextModuleId = 0;
  while (true) {
    yield nextModuleId++;
  }
}
