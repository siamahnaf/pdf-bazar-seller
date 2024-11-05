import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3005/v1/api/pdf",
    documents: ["src/Apollo/**/**/*.ts"],
    watch: true,
    generates: {
        "./src/Apollo/types/": {
            preset: "client",
            plugins: [],
            config: {
                scalars: {
                    DateTime: "Date"
                }
            },
            presetConfig: {
                gqlTagName: "gql"
            }
        }
    }
};

export default config;