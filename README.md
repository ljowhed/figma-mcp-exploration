# Figma MCP Exploration

Exploration of generating Vue/Nuxt UI code directly from a Figma design using the Figma MCP server.

**Test target:** SDH "Add Academic Test Schedule" page.
**Status:** Tested successfully. The generated page renders correctly in the browser.

## Goal

Check whether we can speed up frontend work by generating UI code from Figma designs instead of building every page manually.

## Tech Stack

- Nuxt 4 (Vue 3)
- TypeScript
- Figma MCP server
- TODO: AI tool used (e.g. Claude / Cursor / Copilot)
- TODO: editor (VS Code)

## Steps

1. **Set up the Figma MCP server**
   - Create a Figma personal access token (Figma > Settings > Security > Personal access tokens).
   - Register the Figma MCP server in the editor's MCP config (TODO: add config file name/location).
   - Keep the token out of git (see `.gitignore`).
2. **Prepare the project**
   - Create a Nuxt project and install dependencies:
     ```bash
     npm install
     ```
3. **Copy the Figma frame link**
   - In Figma, select the target frame, then right-click > Copy link to selection.
4. **Generate the page**
   - Give the Figma link to the AI assistant and ask it to build the page in Nuxt/Vue.
   - TODO: add the prompt used.
5. **Review and run**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 and compare the result with the Figma design.

## Result

- The page layout matches the design: General Information and Schedule Information sections, form fields, header, and footer.
- Reusable components were generated:
  `FormLabel`, `TextField`, `SelectField`, `NumberField`, `CheckboxField`, `RadioGroup`, `ToggleField`, `SectionCard`, `InfoBanner`, `StaffCard`, `AppHeader`, `AppFooter`.
- Icons and logos were exported to `public/icons`.

## Findings

- Good for scaffolding layout, spacing, and component structure quickly.
- Still needs manual work: API integration, validation (Zod), state management (Pinia), and replacing generated components with our shared components (e.g. Nuxt UI).
- Output quality depends on how well the Figma file is structured (layer naming, auto layout, components).
- TODO: add other findings (parts that did not match, time spent vs. manual).

## Project Structure

```
app/
  assets/css/     global styles
  components/     generated reusable components
  data/           dropdown options
  pages/          index.vue (Add Academic Test Schedule)
  types/          TypeScript types
public/icons/     exported icons and logos
```

## Run Locally

```bash
npm install
npm run dev
```

Note: Node.js 22.21+ is recommended (Nuxt warns about unsupported versions on older releases).

## Next Steps

- Try the workflow on a real task and compare the time against building manually.
- Test with a Figma file that uses proper components and auto layout.
