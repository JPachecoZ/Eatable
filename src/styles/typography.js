export const fonts = {
  primary: "'Source Sans Pro', sans-serif",
};

export const typography = {
  text: {
    xl:`
      font-size: 1.75rem;
      line-height: 2.18rem;
    `,
    lg: `
    font-size: 1.37rem;
    line-height: 1.75rem;
    `,
    m: `
    font-size: 1.125rem;
    line-height: 1.43rem;
    `,
    s: `
    font-size: 1rem;
    line-height: 1.25rem;
    `,
    xs: `
    font-size: 0.875rem;
    line-height: 1.06rem;
    `,
  },
  head: {
    xl:`
      font-size: 1.75rem;
      line-height: 2.18rem;
    `,
    lg: `
    font-size: 1.37rem;
    line-height: 1.75rem;
    `,
    m: `
    font-size: 1.125rem;
    line-height: 1.43rem;
    `,
    s: `
    font-size: 1rem;
    line-height: 1.25rem;
    `,
    xs: `
    font-size: 0.875rem;
    line-height: 1.06rem;
    `,
  },
};

// for (const size in typography.text) {
//   typography.text[size] += `
//   font-family: ${fonts.primary};
//   `;
// }

// for (const size in typography.head) {
//   typography.head[size] += `
//   font-family: ${fonts.secondary};
//   font-weight: 600;
//   `;
// }