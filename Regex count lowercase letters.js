const lowercaseCount = (str) => {
    return (str.match(/[a-z]/g) || []).length
}
console.log(lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~'))