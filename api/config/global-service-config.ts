import type { ConfigFile } from "@rtk-query/codegen-openapi";

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
