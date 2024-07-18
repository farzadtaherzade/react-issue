import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  &, &.light-mode {
      /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-orange-100: #ffedd5;
  --color-orange-700: #c2410c;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 10%;
  --image-opacity: 90%;
  }

  
  &.dark-mode {
    --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;

  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(0, 0, 0, 0.3);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

  }
  

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

    // reset everything
*, *::before,*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
}

// prevent iOS font size change
html {
  -webkit-text-size-adjust: 100%;
}

// reset body line-height
body {
  /* font-family: "Roboto"; */
  min-height: 100vh;
  line-height: 1;
  text-rendering: optimizeSpeed;
}

// all media elements set to block and full width
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  max-width: 100%;
}

// inherit fonts for inputs and buttons
input,
button,
textarea,
select {
  font: inherit;
  line-height: inherit;
  color: inherit;
}

// collapse table
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// assign button hover state
button, [role="button"] {
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
}

// reset anchor style
a {
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  -webkit-tap-highlight-color: transparent;
}

// reset heading style
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

// reset list style
ol, ul {
  list-style: none;
}

// reset text input style
[type=date],
[type=datetime],
[type=datetime-local],
[type=email],
[type=month],
[type=number],
[type=password],
[type=search],
[type=tel],
[type=text],
[type=time],
[type=url],
[type=week],
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  &:focus {
    outline: 0;
  }
}

// reset firefox placeholder opacity
::-moz-placeholder {
  opacity: 1;
}

// reset textarea style
textarea {
  // move the label to the top
  vertical-align: top;

  // turn off scroll bars in IE unless needed
  overflow: auto;
}

// reset checkbox and radio style
[type='checkbox'],
[type='radio'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0
  }
}

// remove all animations, transitions and smooth scroll for people that prefer not to see them
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyle;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
