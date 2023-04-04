Javascript:(async () => {
    const sessionId = localStorage.sessionId; // get session id to use the api
    const coinsSet = prompt("Set your coins to:"); // get coins to set to
    const apiURL = (endpoint) => `https://s.${location.hostname}/${endpoint}?s=${sessionId}`; // get endpoints urls
    var userStats = {
        "gamesStarted": 9999,
        "coinsOwned": 999999,
        "playerSkin": 35,
        "playerPet": 9,
        "playerXP": 20000,
        "unlockedSkins": [35],
        "unlockedPets": [9],
        "playerPetLevel": 14,
        "lastGameTime": 300,
        "lastKills": 30,
        "lastScore": 9000,
        "totalGameTime": 999999,
        "totalKills": 99999999,
        "totalScore": 999999,
        "totalWins": 999999999,
        "bestGameTime": 360,
        "bestKills": 33,
        "bestScore": 99999,
        "abBotSkillLevel": 1
    }; // default stats
    const userStatsAPI = await fetch(apiURL("login")); // fetch user stats
    const userStatsStatus = userStatsAPI.status;
    if (userStatsStatus == 200) userStats = JSON.parse('{'+(await userStatsAPI.text()).split('{')[1]); // set correct user stats

    userStats.coinsOwned = Number(coinsSet); // set coins to desired amount

    fetch(apiURL("save"), {method: "POST", body: JSON.stringify(userStats)}); // save to account
    location.reload(); // reload page to see changes
})();
