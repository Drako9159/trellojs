const Trello = require("../node_modules/trello/main");

describe("Test for trello API", () => {
    test("Rtry toad", () => {
        const current = {key: "928391", token: "983484", id: "3892"};
        const trello = new Trello(current.key, current.token, current.id);
        
        
        expect(trello.uri).toBe("https://api.trello.com");
    });
});
