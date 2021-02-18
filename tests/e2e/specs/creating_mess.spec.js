describe("Create Message", () => {
    it("display a message in the list", () => {
        cy.visit("/");
        cy.get("[data-test='messageText']").type("New message");

        cy.get("[data-test='sendButton']").click();

        cy.get("[data-test='messageText']").should("have.value", "");

        cy.contains("New message");

    })
})