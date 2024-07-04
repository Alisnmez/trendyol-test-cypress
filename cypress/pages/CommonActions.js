import elements from "../fixtures/elements.json";

class CommonActions {
  navigateToURL(urlKey) {
    cy.visit(elements[urlKey]);
  }

  typeInput(path, text) {
    cy.get(elements[path]).type(elements[text]);
  }

  hoverOver(path) {
    cy.get(elements[path]).trigger("mouseover").wait(2000);
  }

  clickElement(path) {
    cy.get(elements[path]).click();
  }

  clickElementAndGoToNewPage(path) {
    cy.get(elements[path]).then((link) => {
      const url = link.prop("href");
      cy.visit(url);
    });
  }

  goBack() {
    cy.go("back");
  }

  waitt() {
    cy.wait(1000);
  }

  clickElementAndWaitForText(path, text) {
    cy.get(elements[path]).click();
    cy.contains(text).should("be.visible");
  }

  objectQuery(path) {
    cy.contains(elements[path]).should("be.visible");
  }

  compareValues(path1, path2) {
    cy.get(elements[path1])
      .invoke("text")
      .then((text1) => {
        const firstText = text1.trim(); // İlk metni alıp kırparak sakla
        cy.log("First Text:", firstText); // İlk metni konsola yazdır

        // İkinci metnin alınması ve karşılaştırılması
        cy.get(elements[path2])
          .invoke("attr", "title")
          .then((text2) => {
            const secondText = text2.trim(); // İkinci metni alıp kırparak sakla
            cy.log("Second Text:", secondText); // İkinci metni konsola yazdır

            // İki metni karşılaştır
            expect(firstText).to.eq(secondText);
          });
      });
  }
}

export default CommonActions;
