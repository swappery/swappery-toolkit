# ✋✋✋ Swappery UIkit ✋✋✋

[![Version](https://img.shields.io/npm/v/@swappery/uikit)](https://www.npmjs.com/package/@swappery/uikit) [![Size](https://img.shields.io/bundlephobia/min/@swappery/uikit)](https://www.npmjs.com/package/@swappery/uikit)

Swappery UIkit is a set of React components and hooks used to build pages on Swappery's apps. It also contains a theme file for dark and light mode.

## Installation

Use the package manager [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) to install Swappery UIkit. 🎨

```bash
`npm install @swappery/uikit`
`yarn add @swappery/uikit`
```

**\*Note**: In case you want to use the older version of the Swappery UIkit, you should install @swappery-libs/uikit, instead, but we recommend using the latest version of the UIkit.\*

## Setup

### Theme

Before using Swappery UIkit, you need to provide the theme file to styled-component.

```

import { ThemeProvider } from 'styled-components'
import { light, dark } from '@swappery/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>

```

### Reset

A reset CSS is available as a global styled component.

```

import { ResetCSS } from '@swappery/uikit'
...
<ResetCSS />

```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://swappery.github.io/swappery-uikit/)

```

```
