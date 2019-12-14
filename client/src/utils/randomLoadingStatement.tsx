const loadingStatements = [
  'Locating the required gigapixels to render...',
  'Spinning up the hamster...',
  'Shovelling coal into the server...',
  'Programming the flux capacitor...',
  'The bits are breeding...',
  `Why don't you order a sandwich?`,
  `The bits are flowing slowly today...`,
  `We're testing your patience...`,
  `We're building the buildings as fast as we can...`,
  `Powering up the particle accelerator...`
]

export const getRandomLoadingStatement = () =>
  loadingStatements[Math.floor(Math.random() * loadingStatements.length)]
