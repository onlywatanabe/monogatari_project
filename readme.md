# Assets Guide

I have included some in the `ASSETS` directory. I cannot share other assets for obvious copyright reasons. Please source your own assets and place all the following files directly in the root folder alongside the source code.

| Character      | Accepted Filenames                                                                               | Requirements & Notes                                               |
| :------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| Black Hanekawa | `black_hanekawa.gif`                                                                             |                                                                    |
| Hanekawa       | `hanekawa.png`                                                                                   |                                                                    |
| Hitagi         | `hitagi.png` or `hitagi.mp4`                                                                     |                                                                    |
| Suruga         | `suruga.png`                                                                                     |                                                                    |
| Karen          | `karen1.jpg`, `karen2.jpg`, `karen3.jpg`, `karen4.jpg`, `karen5.jpg`, `karen6.jpg`, `karen7.jpg` | Requires all seven numbered images.                                |
| Mayoi          | `mayoi.jpg`, `mayoi.mp4`                                                                         | Use `.jpg` for light mode and `.mp4` for dark mode.                |
| Nadeko         | `nadeko.png`, `nadeko.mp4`, or `nadeko.mkv`                                                      |                                                                    |
| Ononoki        | `ononoki.png`                                                                                    |                                                                    |
| Ougi           | `ougi_light.png`, `ougi_dark.png`                                                                | Specific files required for light and dark modes.                  |
| Shinobu        | `shinobu.png`, `kisshot.webp`                                                                    | Use `shinobu.png` for light mode and `kisshot.webp` for dark mode. |
| Sodachi        | `sodachi_trn.png`                                                                                | Image must have a transparent background.                          |
| Tsukihi        | `tsukihi.mp4` or `tsukihi.mkv`                                                                   |                                                                    |

# Installation guide:

## Chrome:

### 1. Download the Files

- Clone or download this repository
- Extract the contents of the ZIP file to a dedicated folder on your computer. Make sure this folder contains the `manifest.json` file directly at its root level.

### 2. Enable Developer Mode

- Open your Chrome or Chromium-based browser (e.g., Brave, Edge, Vivaldi).
- In the address bar, type `chrome://extensions/` and press Enter.
- Look for the **Developer mode** toggle in the top-right corner of the page. Switch it to **On**.

### 3. Load the Extension

- Once Developer mode is enabled, a new toolbar will appear below the address bar. Click the button labeled **Load unpacked**.
- A file picker window will open. Navigate to the folder where you extracted the repository files in Step 1.
- Select the folder and click **Select Folder** (or **Open**).

### 4. Verify Installation

- The extension should now appear in your list of installed extensions.
- If there are any errors in the `manifest.json` file or missing required files, the browser will display an error card on the extension tile. Click the **Details** button on the extension card to view specific error messages if it fails to load.
- Once loaded successfully, you can manage, update, or remove it from the `chrome://extensions/` page. If you modify the code in the folder later, return to this page and click the **Refresh** icon (a circular arrow) on the extension's card to apply your changes.

### Mozilla Firefox

Firefox requires specific configurations for permanent local extension installations.

#### Nightly or Developer Edition (Recommended)

1. Install Firefox Nightly or Firefox Developer Edition.
2. Type `about:config` in the address bar.
3. Search for `extensions.experiments.enabled` and set the value to `true`.
4. Search for `xpinstall.signatures.required` and set the value to `false`.
5. Zip your project files, change the `.zip` extension to `.xpi`, and drag the file into the browser window.

#### Regular Firefox

Installing custom unsigned extensions on standard Firefox releases is a bit more complicated. Read this [guide](https://github.com/snes19xx/surface-dots/tree/main#firefox-customizations) for exact instructions.
