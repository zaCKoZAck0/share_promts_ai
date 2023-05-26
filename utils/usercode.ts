function userCode(): string {
    // Generate a 4 digit random number
    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    return(seq); // e.g. 4829
}

export default userCode;