import type { ConfigFile } from "@rtk-query/codegen-openapi";

const baseUrl = "https://localhost:7004/";

const config: ConfigFile = {
    schemaFile: `../schema/swagger.json`,
    apiImport: "api",
    apiFile: `../src/api.ts`,
    outputFile: `../src/generated.ts`,
    argSuffix: "ApiRequest",
    responseSuffix: "ApiResponse",
    exportName: `ServiceApiBase`,
    hooks: { lazyQueries: true, mutations: true, queries: true }
};

export default config;
export { baseUrl };
