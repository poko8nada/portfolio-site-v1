const randomGradient = () => {
  const colors = [
    'linear-gradient(90deg, rgb(226, 207, 255), rgb(251, 253, 191))',
    'linear-gradient(90deg, rgb(115, 248, 224), rgb(150, 167, 241))',
    'linear-gradient(90deg, rgb(253, 146, 146), rgb(209, 254, 212))',
    'linear-gradient(90deg, rgb(0, 255, 243), rgb(252, 146, 146))',
    'linear-gradient(90deg, rgb(168, 202, 240), rgb(233, 240, 250))',
    'linear-gradient(90deg, rgb(229, 162, 255), rgb(152, 233, 157))',
    'linear-gradient(90deg, rgb(89, 173, 241), rgb(207, 253, 157))',
    'linear-gradient(90deg, rgb(210, 190, 153), rgb(194, 255, 233))',
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export default randomGradient
