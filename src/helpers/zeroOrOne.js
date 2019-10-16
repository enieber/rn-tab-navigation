const zeroOrOne = () => {
    const randomValue = Math.random()
    const value = randomValue < 0.5 ? Math.floor(randomValue) : Math.ceil(randomValue)
    return value
}

export default zeroOrOne