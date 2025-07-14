# Convert Figma UI to Code with MCP Protocol and Cursor

This guide walks you through one of the fastest ways to convert a Figma UI into code using the MCP protocol with the Cursor IDE.

## Step 1: Set Up the Figma MCP Server

1. Clone the Figma MCP server repository:

   ```bash
   git clone https://github.com/GLips/Figma-Context-MCP
   cd Figma-Context-MCP
   pnpm i --frozen-lockfile
   ```

## Step 2: Get Your Figma API Token

* Log in to your Figma account and generate a personal access token from the developer settings.

## Step 3: Start the MCP Server

* Run the following command with your Figma API key:

  ```bash
  npx figma-developer-mcp --figma-api-key=<your_figma_token>
  ```

## Step 4: Integrate with Cursor IDE (or Any AI IDE)

1. Open Cursor IDE settings.
2. Navigate to the **MCP** section and click **Add New Server**.
3. Choose **SSE** as the protocol.
4. Paste the URL shown in your terminal after starting the MCP server. Typically, it's:

   ```
   http://localhost:3333/sse
   ```
5. Alternatively, configure it directly in the Cursor configuration file with the following:

   ```json
   {
     "mcpServers": {
       "Figma MCP": {
         "type": "sse",
         "url": "http://localhost:3333/sse"
       }
     }
   }
   ```

You're all set! Now you can use Cursor to automatically generate code from your Figma designs using the MCP protocol.

## References: 
https://composio.dev/blog/how-to-use-figma-mcp-with-claude-code-to-build-pixel-perfect-designs
https://medium.com/@maheshguptha49/one-of-the-fastest-way-to-convert-the-figma-ui-to-code-using-mcp-protocol-b6ff484d1a1f
https://github.com/GLips/Figma-Context-MCP

